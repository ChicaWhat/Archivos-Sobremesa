// Importamos los modelos.
import selectUserByIdModel from '../../models/users/selectUserByIdModel.js';

// Función controladora final que retorna la info pública de un usuario.
const getPublicUserController = async (req, res, next) => {
    try {
        // 1. Obtenemos el path param "userId".
        const { userId }  = req.params;

        // 2. Obtenemos los datos del usuario utilizando el id anterior.
        const user = await selectUserByIdModel(userId);

        // 3. Eliminamos la propiedad "email". Si no sabes cómo eliminar una propiedad de un objeto busca en Google.
        delete user.email;

        // 4. Retornamos una respuesta al cliente con los datos del usuario.
        res.send({
            status: 'ok',
            data: {
                user,
            },
        });

    } catch (err) {
        next(err);
    }
};

export default getPublicUserController;
