// Importamos las dependencias.
import fs from 'fs/promises';
import path from 'path';

// Importamos la función de error correspondiente.
import { notFoundError } from '../../services/errorService.js';

// Creamos la ruta absoluta al fichero JSON de posts.
const postsPath = path.resolve(process.cwd(), 'src', 'data', 'posts.json');

// Función controladora final que retorna info sobre un post concreto.
const getPostController = async (req, res, next) => {
    try {
        // Accedemos al path param definido en el endpoint.
        const { postId } = req.params;

        // Obtenemos el listado de posts.
        const posts = JSON.parse(await fs.readFile(postsPath));

        // Tratamos de localizar el post con el ID definido.
        const post = posts.find((post) => {
            return post.id === Number(postId);
        });

        // Si no existe ningún post con el ID definido lanzamos un error.
        if (!post) {
            notFoundError('post');
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
};

// Exportamos la función controladora.
export default getPostController;
