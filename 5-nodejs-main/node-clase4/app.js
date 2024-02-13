// Importamos express.
import express from 'express';

// Array de posts.
const posts = [
    {
        id: 1,
        text: 'Express me tiene frito',
    },
    {
        id: 2,
        text: 'Pa que me abré apuntado a un bootcamp...',
    },
];

// Creamos el servidor.
const app = express();

// Middleware que es capaz de leer un body en formato JSON.
app.use(express.json());

// Middleware que muestra por consola información acerca de la petición entrante.
app.use((req, res, next) => {
    // Obtenemos la ruta y el método de la petición.
    const { url, method } = req;

    // Mostramos por consola los valores anteriores.
    console.log(`Método: ${method}, Endpoint: ${url}`);

    // Saltamos al siguiente middleware.
    next();
});

// Middleware que retorna el listado de posts al cliente.
app.get('/posts', (req, res, next) => {
    try {
        // Si no hay ningún post lanzamos un error.
        if (posts.length < 1) {
            // Creamos el error.
            const err = new Error('Todavía no existe ningún post');

            // Agregamos una propiedad inventada por nosotros que almacene un código de estado http.
            err.httpStatus = 404;

            // Lanzamos el error.
            throw err;
        }

        res.send({
            status: 'ok',
            data: {
                posts,
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
            // Creamos el error.
            const err = new Error('Post no encontrado');

            // Agregamos una propiedad inventada por nosotros que almacene un código de estado http.
            err.httpStatus = 404;

            // Lanzamos el error.
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
app.post('/posts', (req, res, next) => {
    try {
        // Obtenemos el texto del post del body.
        const { text } = req.body;

        // Si falta algún campo lanzamos un error.
        if (!text) {
            // Creamos el error.
            const err = new Error('Faltan campos');

            // Agregamos una propiedad inventada por nosotros que almacene un código de estado http.
            err.httpStatus = 400;

            // Lanzamos el error.
            throw err;
        }

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

    // Enviamos el error al cliente. Si el error tiene una propiedad httpStatus establecemos ese código de estado.
    // Si no la tiene establecemos por defecto el valor 500.
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
app.listen(8000, () => {
    console.log('Servidor escuchando en http://localhost:8000');
});
