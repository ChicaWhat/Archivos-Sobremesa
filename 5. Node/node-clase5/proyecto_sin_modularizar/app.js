// Importamos las dependencias.
import express from 'express';
import morgan from 'morgan';
import fs from 'fs/promises';
import path from 'path';

// Importamos el puerto.
import { PORT } from './env.js';

// Importamos el array de posts del fichero JSON correspondiente.
import posts from './data/posts.json' assert { type: 'json' };

// Creamos el servidor.
const app = express();

// Middleware que es capaz de leer un body en formato JSON.
app.use(express.json());

// Middleware que muestra por consola información acerca de la petición entrante.
app.use(morgan('dev'));

// Middleware que retorna el listado de posts al cliente. Permite filtrar por autor y palabra clave.
app.get('/posts', (req, res, next) => {
    try {
        // Obtenemos los query params necesarios.
        const { author } = req.query;

        // Si no hay ningún post lanzamos un error.
        if (posts.length < 1) {
            const err = new Error('Todavía no existe ningún post');
            err.httpStatus = 404;
            throw err;
        }

        // Variable que almacenará los post filtrados en caso de que exista author.
        let filteredPost;

        // Si existe "author" filtramos todos los post de ese autor.
        if (author) {
            filteredPost = posts.filter((post) => post.author.includes(author));
        }

        /**
         * También podríamos hacer lo anterior en un solo paso haciendo uso del operador ternario.
         *
         *  let filteredPost = author
         *      ? posts.filter((post) => post.author.includes(author))
         *      : null;
         */

        res.send({
            status: 'ok',
            data: {
                // Si "filteredPost" contiene un valor considerado falso por JavaScript
                // retornamos los posts sin filtrar.
                posts: filteredPost || posts,
            },
        });
    } catch (err) {
        // Enviamos el error al middleware de errores.
        next(err);
    }
});

// Middleware que retorna un post con un ID concreto al cliente.
app.get('/posts/:postId', (req, res, next) => {
    try {
        // Accedemos al path param definido en el endpoint.
        const { postId } = req.params;

        // Tratamos de localizar el post con el ID definido.
        const post = posts.find((post) => {
            return post.id === Number(postId);
        });

        // Si no existe ningún post con el ID definido lanzamos un error.
        if (!post) {
            const err = new Error('Post no encontrado');
            err.httpStatus = 404;
            throw err;
        }

        res.send({
            status: 'ok',
            data: {
                post,
            },
        });
    } catch (err) {
        // Enviamos el error al middleware de errores.
        next(err);
    }
});

// Middleware que me permite crear un post.
app.post('/posts', async (req, res, next) => {
    try {
        // Obtenemos autor y el texto del post del body.
        const { text, author } = req.body;

        // Si falta algún campo lanzamos un error.
        if (!text || !author) {
            const err = new Error('Faltan campos');
            err.httpStatus = 400;
            throw err;
        }

        // Pusheamos el nuevo post al array de posts.
        posts.push({
            id: posts.length + 1,
            text,
            author,
        });

        // Creamos la ruta absoluta al fichero JSON de posts.
        const postsPath = path.join(process.cwd(), 'data', 'posts.json');

        // Actualizamos el fichero JSON con el nuevo usuario.
        await fs.writeFile(postsPath, JSON.stringify(posts, null, 4));

        res.status(201).send({
            status: 'ok',
            message: `Post creado con el mensaje: "${text}"`,
        });
    } catch (err) {
        // Enviamos el error al middleware de errores.
        next(err);
    }
});

// Middleware de manejo de errores.
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
    // Mostramos el error por consola.
    console.error(err);

    res.status(err.httpStatus || 500).send({
        status: 'error',
        message: err.message,
    });
});

// Middleware de ruta no encontrada.
app.use((req, res) => {
    res.status(404).send({
        status: 'error',
        message: 'Ruta no encontrada',
    });
});

// Le decimos al servidor que escuche peticiones en un puerto específico.
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
