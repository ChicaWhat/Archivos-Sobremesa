// Utilizamos el método config de dotenv para acceder a las variables de entorno personalizadas del fichero ".env"
import 'dotenv/config';

// Importamos las variables de entorno necesarias
const { PORT } = process.env;

// Exportamos las variables
export { PORT };