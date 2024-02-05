import getPool from './getPool.mjs';
import 'dotenv/config';

const createTables = async () => {

    try {
        
        const pool = await getPool();

        await pool.query(

            `CREATE DATABASE IF NOT EXISTS ${process.env.DATABASE}`

        );

        await pool.query(

            `USE ${process.env.DATABASE}`

        );

        await pool.query(
            `
                CREATE TABLE IF NOT EXISTS students (
                    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
                    first_name VARCHAR(50) NOT NULL,
                    last_name VARCHAR(50) NOT NULL,
                    birthDate DATETIME NOT NULL,
                    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
                );    
            `
        );

        await pool.query(
             `
                CREATE TABLE IF NOT EXISTS address (
                    id_address INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
                    id_students INT UNSIGNED NOT NULL,
                    address VARCHAR(100) NOT NULL,
                    codePostal INT,
                    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
                    modifiedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                    FOREIGN KEY (id_address) REFERENCES students (id)
                )
            `
        );

         console.log(
            `
            Base de datos: ${process.env.DATABASE} creada.
            Tabla de ESTUDIANTES con sus datos y tabla de DIRECCIONES con sus respectivos datos
            `
         )           

    } catch (error) {
        
        console.log(error);

    }
};

await createTables();

process.exit(0);