// Importamos las dependencias.
import fs from 'fs/promises';
import path from 'path';

// Importamos la función de error correspondiente.
import { missingFieldsError } from '../../services/errorService.js';

// Creamos la ruta absoluta al fichero JSON de posts.
const postsPath = path.resolve(process.cwd(), 'src', 'data', 'posts.json');

// Función controladora final que permite crear un post.
const newPostController = async (req, res, next) => {
    try {
        // Obtenemos autor y el texto del post del body.
        const { text, author } = req.body;

        // Si falta algún campo lanzamos un error.
        if (!text || !author) {
            missingFieldsError();
        }

        // Obtenemos el listado de posts.
        const posts = JSON.parse(await fs.readFile(postsPath));

        // Pusheamos el nuevo post al array de posts. Utilizamos el método "randomUUID" de
        // "crypto" para generar un ID único para cada post.
        posts.push({
            id: crypto.randomUUID(),
            text,
            author,
        });

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
