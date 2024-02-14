// Importamos las dependencias
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

// Importamos las variables de entorno
import { PORT } from './env.js';

// Importamos las funciones controladoras finales de los errores
export {
    errorController,
    notFoundController,
} from './src/controllers/errors/index.js';

// Creamos el servidor
const app = express();

// Middleware que lee un body en formato JSON
app.use(express.json());

// Middleware que evita problemas de conexión entre cliente y servidor
app.use(cors());

// Middleware que muestra info sobre la petición entrante
app.use(morgan('dev'));

// Middleware de manejo de errores
// eslint-disable-next-line no-undef
app.use(errorController);

// Middleware de ruta no encontrada
// eslint-disable-next-line no-undef
app.use(notFoundController);

// Le indicamos al servidor que escuche peticiones en un puerto concreto
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
