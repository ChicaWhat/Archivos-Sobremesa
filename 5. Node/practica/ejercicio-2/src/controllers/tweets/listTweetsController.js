// Importamos los modelos...
import selectAllTweetsModel from '../../models/tweets/selectAllTweetsModel.js';

// Función controladora final que permite crear un tweet.
const listTweetsController = async (req, res, next) => {
    try {
        // Seleccionamos todos los tweets de la base de datos...
        const tweets = await selectAllTweetsModel();

        res.send({
            status: 'ok',
            data: {
                tweets,
            },
        });
    } catch (err) {
        next(err);
    }
};

export default listTweetsController;
