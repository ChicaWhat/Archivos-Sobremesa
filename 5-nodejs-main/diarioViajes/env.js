// Importamos el dotenv para poder configurar las variables de entornos que vamos a usar
import 'dotenv/config';

// Creamos las variables de entorno
const { MYSQL_HOST, MYSQL_USER, MYSQL_PASS, MYSQL_DB, PORT, SECRET } = process.env;

// Exportamos las variables recientemente creadas
export { MYSQL_HOST, MYSQL_USER, MYSQL_PASS, MYSQL_DB, PORT, SECRET };