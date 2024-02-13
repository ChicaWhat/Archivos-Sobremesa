// Importamos las dependencias.
import fs from 'fs/promises';
import path from 'path';

// Creamos la ruta absoluta al fichero JSON de posts.
const postsPath = path.resolve(process.cwd(), 'src', 'data', 'posts.json');

// Función controladora final que retorna el listado de posts.
const listPostController = async (req, res, next) => {
    try {
        // Obtenemos los query params necesarios.
        const { author } = req.query;

        // Obtenemos el listado de posts.
        const posts = JSON.parse(await fs.readFile(postsPath));

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
};

// Exportamos la función controladora.
export default listPostController;
