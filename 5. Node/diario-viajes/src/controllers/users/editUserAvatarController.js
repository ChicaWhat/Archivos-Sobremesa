// Importamos los errores
import { missingFieldsError } from "../../services/errorService.js";

// Función controladora final que permite cambiar el avatar de un usuario
const editUserAvatarController = async (req, res, next) => {
    try {
        // Obtenemos el avatar del cliente. Si no recibimos ningún avatar del cliente 'req.files' no 
        // existirá y se generará un error automático. Para evitarlo, usaremos una interrogación al final 
        // del objeto files indicando que este podría ser undefined
        const avatar = req.files?.avatar;

        // Si falta algún campo lanzamos un error.
        if (!avatar) {
            missingFieldsError();
        }

        // Obtneemos los datos del usuario.
        const user = await selectUserByIdModel(req.user.id);

        // Comprobamos si el usuario tiene un avatar previo. De ser así lo eliminamos.
        if (user.avatar) {
            // Función que elimina un avatar de la carpeta de subida de archivos... (pendiente)

        }

        // Guardamos el nuevo avatar en la carpeta de subida de archivos... (pendiente)
        const avatarName = 'sgsgf';

        // Guardamos el nombre del avatar en la base de datos... (pendiente)

        // Enviamos una respuesta al cliente.
        res.send({
            status: 'ok',
            message: 'Avatar actualizado',
        });
    } catch (err) {
        next(err)
    }
};

export default editUserAvatarController;

// En este caso estamos enviando un archivo, no un JSON, entonces en Postman debemos de
// crear un PUT, seleccionar el Body -> form-data y cambiar a File una propiedad.
