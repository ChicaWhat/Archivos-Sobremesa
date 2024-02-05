import getPool from "./getPool.js";

const createTableUsers = async () => {
    try {
        
        const pool = await getPool();

        await pool.query(
            `
                CREATE TABLE IF NOT EXISTS users (
                    id_user INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
                    nombre VARCHAR(100),
                    apellido VARCHAR(100),
                    email VARCHAR(100) UNIQUE NOT NULL,
                    password VARCHAR(100) NOT NULL
                )
            `
        );

        console.log('Tabla usuarios creada correctamente...');

    } catch (error) {
        console.log(error);
    }
}

await createTableUsers();
process.exit(0);