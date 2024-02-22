//cada vez que nesecite accede a mi base de datos
//para recuperar, insetar, actualizar, borrar, o lo que sea
//me tengo traer a getPool

import getPool from "./getPool.js";

const getAllOdontologos = async () => {
    try {
        
        const pool = await getPool();

        //consulta
        const [odontologos] = await pool.query('SELECT * FROM odontologos');

        console.log(odontologos);

    } catch (error) {
        console.log(error);
    }
}

await getAllOdontologos();
process.exit(0);