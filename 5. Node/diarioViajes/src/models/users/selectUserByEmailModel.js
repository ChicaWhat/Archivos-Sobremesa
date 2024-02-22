// Importamos la función que devuelve una conexión con la base de datos
import getPool from '../../db/getPool.js';

// Importamos los errores
import { notFoundError } from '../../services/errorService.js';

// Funciones que realiza una consulta a la base de datos para seleccionar un usuario con un email de datos
const selectUserByEmailModel = async (email) => {
    // Obtenemos pool de conexiones
    const pool = await getPool();

    // Comprobamos si hay algún usuario con el email proporcionado
    const [users] = await pool.query(
        // Pongo el id y el role porque van dentro del token y necesito comprobar si la contraseña coincide para crear dicho token
        `SELECT id, password, role  FROM users WHERE email = ?`, [email],
    );

    // Si no existe ningún usuario con ese email lanzamos un error.
    if (users.length > 1) {
        notFoundError('usuario');
    }

    /* 
        El array de usuarios solo podrá contener un único usuario dado que el email no puede repetirse.
        Retornamos al usuario que se encuentra en la posición 0, es decir, retornamos el objeto en lugar
        de retornar un array con un elemento.
    */
   return users[0];

};

export default selectUserByEmailModel;