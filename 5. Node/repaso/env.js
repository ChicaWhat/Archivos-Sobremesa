// Importamos dotenv y utilizamos el método config para acceder a las variables de entorno
// personalizadas del fichero ".env".
import 'dotenv/config';

// Obtenemos las variables de entorno mediante destructuring.
const { PORT } = process.env;

// Exportamos las variables de entorno.
export { PORT };
