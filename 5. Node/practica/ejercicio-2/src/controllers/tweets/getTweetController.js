// Importamos los modelos.
import selectTweetByIdModel from '../../models/tweets/selectTweetByIdModel.js';

// Función controladora final que permite crear un tweet.
const getTweetController = async (req, res, next) => {
    try {
        // Obtenemos el path param "tweetId".
        const { tweetId } = req.params;

        // Seleccionamos el tweet de la base de datos...
        const tweet = await selectTweetByIdModel(tweetId);

        res.send({
            status: 'ok',
            data: {
                tweet,
            },
        });
    } catch (err) {
        next(err);
    }
};

export default getTweetController;
