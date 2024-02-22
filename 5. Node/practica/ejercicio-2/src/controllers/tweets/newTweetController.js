// Importamos los modelos.
import insertTweetModel from '../../models/tweets/insertTweetModel.js';

// Importamos los errores...
import { missingFieldsError } from '../../services/errorService.js';

// Función controladora final que permite crear un tweet.
const newTweetController = async (req, res, next) => {
    try {
        // Importamos el texto del body.
        const { text } = req.body;

        // Si faltan campos lanzamos un error.
        if (!text) {
            missingFieldsError();
        }

        // Creamos el tweet. A la función modelo hay que pasarle el texto y el ID del usuario
        // que crea el tweet.
        await insertTweetModel(text, req.user.id);

        res.status(201).send({
            status: 'ok',
            message: 'Tweet creado',
        });
    } catch (err) {
        next(err);
    }
};

export default newTweetController;
