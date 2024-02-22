// Importamos las dependencias.
import express from 'express';
import morgan from 'morgan';

// Importamos el puerto.
import { PORT } from './env.js';

// Importamos las funciones controladoras finales de los posts.
import {
    newPostController,
    listPostController,
    getPostController,
} from './src/controllers/posts/index.js';

// Importamos las funciones controladoras finales de los errores.
import {
    handleErrorController,
    notFoundController,
} from './src/controllers/errors/index.js';

// Creamos el servidor.
const app = express();

// Middleware que es capaz de leer un body en formato JSON.
app.use(express.json());

// Middleware que muestra por consola información acerca de la petición entrante.
app.use(morgan('dev'));

// Middleware que retorna el listado de posts al cliente. Permite filtrar por autor y palabra clave.
app.get('/posts', listPostController);

// Middleware que retorna un post con un ID concreto al cliente.
app.get('/posts/:postId', getPostController);

// Middleware que me permite crear un post.
app.post('/posts', newPostController);

// Middleware de manejo de errores.
// eslint-disable-next-line no-unused-vars
app.use(handleErrorController);

// Middleware de ruta no encontrada.
app.use(notFoundController);

// Le decimos al servidor que escuche peticiones en un puerto específico.
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
