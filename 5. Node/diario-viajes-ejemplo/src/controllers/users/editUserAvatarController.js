// Importamos los modelos.
import selectUserByIdModel from '../../models/users/selectUserByIdModel.js';
import updateUserAvatarModel from '../../models/users/updateUserAvatarModel.js';

// Importamos los servicios.
import { deletePhoto, savePhoto } from '../../services/photoService.js';

// Importamos los errores.
import { missingFieldsError } from '../../services/errorService.js';

// Función controladora final que permite cambiar el avatar de un usuario.
const editUserAvatarController = async (req, res, next) => {
    try {
        // Obtenemos el avatar del cliente. Si no recibimos ningún avatar del cliente "req.files" no
        // existirá y se generará un error automático. Para evitarlo, usaremos una interrogación al final
        // del objeto files indicando que este podría ser undefined.
        const avatar = req.files?.avatar;

        // Si falta algún campo lanzamos un error.
        if (!avatar) {
            missingFieldsError();
        }

        // Obtenemos los datos del usuario.
        const user = await selectUserByIdModel(req.user.id);

        // Comprobamos si el usuario tiene un avatar previo. De ser así lo eliminamos.
        if (user.avatar) {
            await deletePhoto(user.avatar);
        }

        // Guardamos el nuevo avatar en la carpeta de subida de archivos. Especificamos
        // en el segundo argumento un ancho de 150px para la redimensión.
        const avatarName = await savePhoto(avatar, 150);

        // Guardamos el nombre del avatar en la base de datos.
        await updateUserAvatarModel(avatarName, req.user.id);

        // Enviamos una respuesta al cliente.
        res.send({
            status: 'ok',
            message: 'Avatar actualizado',
        });
    } catch (err) {
        next(err);
    }
};

export default editUserAvatarController;
