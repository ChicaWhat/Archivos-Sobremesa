// Dentro de este módulo vamos a importar las dependencias de mysql y las variables de entorno para poder crear la conexión
// entre Node.js y la base de datos
import mysql from 'mysql2/promise';
import { MYSQL_HOST, MYSQL_USER, MYSQL_PASS, MYSQL_DB, PORT, SECRET } from '../../env.js';

// Variable que almacenará un pool de conexiones
let pool;

// Función que retorna un pool de conexiones
const getPool = async () => {
    try {
        // Si no hay un pool de conexiones, es decir, si la variable pool contiene un valor
        // considerado falso, creamo un pool
        if (!pool) {
            // Creamos un pool termporal con el único fin de crear la base de datos
            pool = await mysql.createPool({
                host: MYSQL_HOST,
                user: MYSQL_USER,
                password: MYSQL_PASS, 
            });

            // Ahora que tenemos un pool temporal creamos la base de datos si no existe.
            await pool.query(`CREATE DATABASE IF NOT EXISTST ${MYSQL_DB}`);

            // Creamos 



        }
        
    } catch (err) {
        console.error(err);
    }

};