// importamos el array de posts del fichero JSON correspondiente
import posts from '../../data/messages.json' assert { type: 'json' };

const getPostControllers = (req, res, next) => {
    try {
        const { messageId } = req.params;

        const post = posts.find((post) => {
            return  post.id === Number(messageId);
        });

        res.send({
            status: 'ok',
            data: {
                post,
            },
        });
    } catch (err) {
        console.log(err);
    }
};

export default getPostControllers;