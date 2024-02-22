// Importamos la función que devuelve una conexión con la base de datos.
import getPool from '../../db/getPool.js';

// Importamos los errores.
import { notFoundError } from '../../services/errorService.js';

// Función que se conecta a la base de datos y retorna un tweet en concreto.
const selectTweetByIdModel = async (tweetId) => {
    // Obtenemos un pool de conexiones.
    const pool = await getPool();

    // Insertamos el tweet.
    const [tweets] = await pool.query(`SELECT * FROM tweets WHERE id = ?`, [
        tweetId,
    ]);

    // Si no hay ningún tweet lanzamos un error.
    if (tweets.length < 1) {
        notFoundError('tweet');
    }

    // Si hay un tweet este estará en la posición 0. Retornamos esa posición.
    return tweets[0];
};

export default selectTweetByIdModel;
