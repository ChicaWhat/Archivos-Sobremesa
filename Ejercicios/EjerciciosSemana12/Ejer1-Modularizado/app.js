import express from 'express';
import morgan from 'morgan';
import postRouter from './src/routers/postRouter.js'

// Importamos el puerto
import { PORT } from './env.js';

const app = express();

app.use(express.json());

app.use(morgan('dev'));

app.use(postRouter);

// Middleware de ruta no encontrada
app.use((req, res) => {
    res.status(404).send({
        status: 'error',
        message: 'Ruta no encontrada',
    });
});

// Le pedimos al servidor que escuche peticiones en un puerto específico
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});