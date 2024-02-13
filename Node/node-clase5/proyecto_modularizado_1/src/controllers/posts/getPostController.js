// Importamos el array de posts del fichero JSON correspondiente.
import posts from '../../data/posts.json' assert { type: 'json' };

// Función controladora final que retorna info sobre un post concreto.
const getPostController = (req, res, next) => {
    try {
        // Accedemos al path param definido en el endpoint.
        const { postId } = req.params;

        // Tratamos de localizar el post con el ID definido.
        const post = posts.find((post) => {
            return post.id === Number(postId);
        });

        // Si no existe ningún post con el ID definido lanzamos un error.
        if (!post) {
            const err = new Error('Post no encontrado');
            err.httpStatus = 404;
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
};

// Exportamos la función controladora.
export default getPostController;
