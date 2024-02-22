import getPool from "./getPool.js";

const insertOdontologo = async () => {
    try {
        
        const pool = await getPool();

        await pool.query(
            `
                INSERT INTO odontologos (id_odontologo, nombre, apellido, direccion, telefono)
                VALUES (?,?,?,?,?)
            `,
            [5555,'Prueba','Apellido Prueba', 'Calle 1 1235', '0987665543']
        );

        console.log('Dato agregado correctamente');

    } catch (error) {
        console.log(error);
    }
}

await insertOdontologo();
process.exit(0);