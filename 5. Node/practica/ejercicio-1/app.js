// Importamos las dependencias.
import express from 'express';
import morgan from 'morgan';

// Importamos el puerto.
import { PORT } from './env.js';

// Creamos el servidor.
const app = express();

// Middleware que muestra por consola info sobre la petición entrante.
app.use(morgan('dev'));

// Middleware que permite leer un body en formato JSON.
app.use(express.json());

// Middleware que permite registrar un usuario.
app.post('/users', (req, res, next) => {
    try {
        // Obtenemos los datos del body.
        const { username, email, password } = req.body;

        // Si falta algún campo lanzamos un error.
        if (!username || !email || !password) {
            const err = new Error('Faltan campos');
            err.httpStatus = 400;
            throw err;
        }

        // Enviamos una respuesta al cliente.
        res.status(201).send({
            status: 'ok',
            message: 'Usuario creado',
        });
    } catch (err) {
        next(err);
    }
});

// Middleware que devuelve info sobre un usuario concreto (por ID).
app.get('/users/:userId', (req, res, next) => {
    try {
        // Obtenemos el parámetro de ruta (path param) correspondiente.
        const { userId } = req.params;

        // Ahora comprobaríamos si el usuario con ese ID existe. En este caso daremos por
        // hecho que existe y enviaremos una respuesta al cliente.
        res.send({
            status: 'ok',
            data: {
                user: `Datos del usuario con ID ${userId}`,
            },
        });
    } catch (err) {
        next(err);
    }
});

// Middleware que permite editar el nombre de un usuario.
app.put('/users/:userId', (req, res, next) => {
    try {
        // Obtenemos el parámetro de ruta (path param) correspondiente.
        const { userId } = req.params;

        // Obtenemos la info necesaria del body.
        const { username } = req.body;

        // Si falta algún campo lanzamos un error.
        if (!username) {
            const err = new Error('Faltan campos');
            err.httpStatus = 400;
            throw err;
        }

        // Ahora comprobaríamos si el usuario con ese ID existe antes de editar el nombre.
        // En este caso daremos por hecho que existe y enviaremos una respuesta al cliente.
        res.send({
            status: 'ok',
            data: {
                user: `Nombre de usuario con ID ${userId} actualizado`,
            },
        });
    } catch (err) {
        next(err);
    }
});

// Middleware que permite eliminar un usuario.
app.delete('/users/:userId', (req, res, next) => {
    try {
        // Obtenemos el parámetro de ruta (path param) correspondiente.
        const { userId } = req.params;

        // Ahora comprobaríamos si el usuario con ese ID existe antes de eliminarlo. En este
        // caso daremos por hecho que existe y enviaremos una respuesta al cliente.
        res.send({
            status: 'ok',
            data: {
                user: `Datos del usuario con ID ${userId} eliminados`,
            },
        });
    } catch (err) {
        next(err);
    }
});

// Middleware de manejo de errores.
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
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

// Ponemos el servidor a escuchar peticiones en un puerto dado.
app.listen(PORT, () => {
    console.log(`Servidor funcionando en http://localhost:${PORT}`);
});
