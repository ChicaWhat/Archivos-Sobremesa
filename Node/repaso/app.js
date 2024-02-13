// Importamos las dependencias necesarias.
import express from 'express';
import morgan from 'morgan';

// Importamos el puerto de nuestro servidor.
import { PORT } from './env.js';

// Creamos el servidor.
const app = express();

// Middleware que muestra información sobre la petición entrante. Middleware opcional, ha de ir antes
// de los middleware que requieran un método.
app.use(morgan('dev'));

// Middleware que lee un body en formato JSON. Middleware clave, ha de ir antes de los middleware que
// requieran un método.
app.use(express.json());

// Middleware que me permite crear una publicación.
app.post('/posts', (req, res, next) => {
    try {
        // Obtenemos los datos necesarios del body.
        const { text } = req.body;

        // Lanzamos un error si falta algún campo.
        if (!text) {
            const err = new Error('Faltan campos');
            err.httpStatus = 400; // BAD REQUEST
            throw err;
        }

        // Enviamos una respuesta al cliente.
        res.status(201).send({
            status: 'ok',
            message: 'Publicación creada',
        });
    } catch (err) {
        // Enviamos el error al middleware de error.
        next(err);
    }
});

// Middleware que retorna info sobre una publicación concreta.
app.get('/posts/:postId', (req, res, next) => {
    try {
        // Obtenemos el parámetro de ruta (path param) correspondiente.
        const { postId } = req.params;

        // Si obtuviéramos la info de una base de datos (o de un array) habría que comprobar si
        // existe el post. En este caso como es una simulación no haremos la comprobación y daremos
        // por hecho que todos los ID que nos lleguen existen.

        // Enviamos una respuesta al cliente.
        res.send({
            status: 'ok',
            data: {
                post: `Aquí tienes la info del post con ID ${postId}`,
            },
        });
    } catch (err) {
        // Enviamos el error al middleware de error.
        next(err);
    }
});

// Middleware de manejo de errores. Middleware clave, siempre será el penúltimo.
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
    // Mostramos por consola el error.
    console.error(err);

    // Enviamos el error al cliente.
    res.status(err.httpStatus || 500).send({
        status: 'error',
        message: err.message,
    });
});

// Middleware de ruta no encontrada. Middleware clave, siempre será el último.
app.use((req, res) => {
    res.status(404).send({
        status: 'error',
        message: 'Ruta no encontrada',
    });
});

// Ponemos el servidor a escuchar peticiones en un puerto específico. Este método siempre ha de ir
// al final del fichero como última linea.
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
