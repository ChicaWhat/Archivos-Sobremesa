// Importamos la función que devuelve una conexión con la base de datos.
import getPool from '../../db/getPool.js';

// Función que realiza una consulta a la base de datos retornar el listado de entradas.
const selectAllEntriesModel = async () => {
    const pool = await getPool();

    const [entries] = await pool.query(`SELECT * FROM entries`);

    return entries;
};

export default selectAllEntriesModel;
