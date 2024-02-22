// Utilizamos el método config de dotenv para acceder a las variables de entorno
// personalizadas.
import 'dotenv/config';

// Obtenemos las variables de entorno.
const {
    MYSQL_HOST,
    MYSQL_USER,
    MYSQL_PASS,
    MYSQL_DB,
    PORT,
    SECRET,
    UPLOADS_DIR,
} = process.env;

// Exportamos las variables.
export {
    MYSQL_HOST,
    MYSQL_USER,
    MYSQL_PASS,
    MYSQL_DB,
    PORT,
    SECRET,
    UPLOADS_DIR,
};
