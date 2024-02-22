// Importamos las dependencias.
import fs from 'fs/promises';
import path from 'path';

// Importamos el array de posts del fichero JSON correspondiente.
import posts from '../../data/posts.json' assert { type: 'json' };

// Función controladora final que permite crear un post.
const newPostController = async (req, res, next) => {
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
        const postsPath = path.resolve(
            process.cwd(),
            'src',
            'data',
            'posts.json',
        );

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
};

// Exportamos la función controladora.
export default newPostController;
