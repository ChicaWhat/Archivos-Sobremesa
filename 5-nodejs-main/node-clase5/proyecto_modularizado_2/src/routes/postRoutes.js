// Importamos express.
import express from 'express';

// Importamos las funciones controladoras finales de los posts.
import {
    newPostController,
    listPostController,
    getPostController,
} from '../controllers/posts/index.js';

// Creamos un router.
const router = express.Router();

// Middleware que retorna el listado de posts al cliente. Permite filtrar por autor y palabra clave.
router.get('/posts', listPostController);

// Middleware que retorna un post con un ID concreto al cliente.
router.get('/posts/:postId', getPostController);

// Middleware que me permite crear un post.
router.post('/posts', newPostController);

// Exportamos el router.
export default router;
