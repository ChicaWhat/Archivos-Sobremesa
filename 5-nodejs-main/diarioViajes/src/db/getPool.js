// Dentro de este módulo vamos a importar las dependencias de mysql y las variables de entorno para poder crear la conexión
// entre Node.js y la base de datos
import mysql from 'mysql2/promise';
import { MYSQL_HOST, MYSQL_USER, MYSQL_PASS, MYSQL_DB, PORT, SECRET } from '../../env.js';

// Variable que almacenará un pool de conexiones
let pool;