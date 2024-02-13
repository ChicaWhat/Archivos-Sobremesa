// Importamos el array de posts del fichero JSON correspondiente.
import posts from '../../data/posts.json' assert { type: 'json' };

// Función controladora final que retorna el listado de posts.
const listPostController = (req, res, next) => {
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
};

// Exportamos la función controladora.
export default listPostController;
