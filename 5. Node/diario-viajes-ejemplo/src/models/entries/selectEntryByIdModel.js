// Importamos la función que devuelve una conexión con la base de datos.
import getPool from '../../db/getPool.js';

// Importamos las entradas.
import { notFoundError } from '../../services/errorService.js';

// Función que realiza una consulta a la base de datos retornar una entrada concreta.
const selectEntryByIdModel = async (entryId) => {
    const pool = await getPool();

    // Intentamos localizar la entrada con el id recibido.
    const [entries] = await pool.query(`SELECT * FROM entries WHERE id = ?`, [
        entryId,
    ]);

    // Si no existe la entrada lanzamos un error.
    if (entries.length < 1) {
        notFoundError('entrada');
    }

    // Si existe una entrada estará en la posición cero del array.
    return entries[0];
};

export default selectEntryByIdModel;
