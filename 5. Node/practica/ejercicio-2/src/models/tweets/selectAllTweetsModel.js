// Importamos la función que devuelve una conexión con la base de datos.
import getPool from '../../db/getPool.js';

// Función que se conecta a la base de datos y retorna el listado de tweets.
const selectAllTweetsModel = async () => {
    // Obtenemos un pool de conexiones.
    const pool = await getPool();

    // Insertamos el tweet.
    const [tweets] = await pool.query(`SELECT * FROM tweets`);

    return tweets;
};

export default selectAllTweetsModel;
