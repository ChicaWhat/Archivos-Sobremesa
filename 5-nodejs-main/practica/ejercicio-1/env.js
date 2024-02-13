// Importamos dotenv y utilizamos el méþodo config para acceder a las
// variables de entorno personalizadas.
import 'dotenv/config';

// Obtenemos las variables de entorno.
const { PORT } = process.env;

// Exportamos las variables.
export { PORT };
