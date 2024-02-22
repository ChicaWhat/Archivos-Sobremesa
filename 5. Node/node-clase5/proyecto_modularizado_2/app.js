// Importamos las dependencias.
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

// Importamos el puerto.
import { PORT } from './env.js';

// Importamos las rutas de los posts.
import postRoutes from './src/routes/postRoutes.js';

// Importamos las funciones controladoras finales de los errores.
import {
    handleErrorController,
    notFoundController,
} from './src/controllers/errors/index.js';

// Creamos el servidor.
const app = express();

// Middleware que es capaz de leer un body en formato JSON.
app.use(express.json());

// Middleware que evita problemas de conexión con el cliente.
app.use(cors());

// Middleware que muestra por consola información acerca de la petición entrante.
app.use(morgan('dev'));

// Middleware que indica a express donde están las rutas de los posts.
app.use(postRoutes);

// Middleware de manejo de errores.
// eslint-disable-next-line no-unused-vars
app.use(handleErrorController);

// Middleware de ruta no encontrada.
app.use(notFoundController);

// Le decimos al servidor que escuche peticiones en un puerto específico.
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
