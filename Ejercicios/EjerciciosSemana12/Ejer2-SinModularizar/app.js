import express from 'express';
import morgan from 'morgan';
import fs from 'fs/promises';
import path from 'path';

// importamos el array de posts del fichero JSON correspondiente
import posts from './src/data/messages.json' assert { type: 'json' };

// Importamos el puerto
import { PORT } from './env.js';

import { v4 as uuidv4 } from 'uuid';

// Creamos el servidor
const app = express();

// Hacemos que el servidor pueda leer un archivo JSON
app.use(express.json());

app.use(morgan('dev'));

// Middleware que permite crear un mensaje
app.post('/messages', async (req, res, next) => {
  try {
    // Obtenemos el texto del post del body
    const { text } = req.body;

    // Si falta algún campo lanzamos un error
    if (!text) {
      const err = new Error('Faltan campos');
      err.httpStatus = 400;
      throw err;
    };

    // Pusheamos el nuevo post al array de posts
    posts.push({
      id: uuidv4(),
      text,
    });

    // Creamos la ruta absoluta al fichero JSON de posts
    const pathPost = path.join(process.cwd(), 'src', 'data', 'messages.json');

    // Actualizamos el fichero JSON con el post
    await fs.writeFile(pathPost, JSON.stringify(posts, null, 4));

    // Enviamos una respuesta al servidor
    res.status(201).send({
      status: 'ok',
      message: `Mensaje creado con el mensaje: "${text}"`,
    });
  } catch (err) {
    // Enviamos el error al middleware de errores
    next(err);
  }
});

// Middleware que retorna un post con un ID concreto al cliente
app.get('/messages/:messageId', (req, res, next) => {
  try {
    // Accedemos al path param definido en el endpoint
    const { messageId } = req.params;

    // Tratamos de localizar el post con el ID definido
    const post = posts.find((post) => {
      return post.id === Number(messageId);
    });

    // Si no existe ningún post con el ID definido lanzamos un error
    if (!post) {
      const err = new Error('Post no encontrado');
      err.httpStatus = 404;
      throw err;
    };

    res.send({
      status: 'ok',
      data: {
        post,
      },
    });
  } catch (err) {
    // Enviamos el error al middleware de errores
    netx(err);
  }
});

// Middleware de manejo de errores
app.use((err, req, res, next) => {
  // Mostramos el error por console
  console.log(err);

  res.status(err.httpStatus || 500).send({
    status: 'error',
    message: err.message,
  })
})


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
