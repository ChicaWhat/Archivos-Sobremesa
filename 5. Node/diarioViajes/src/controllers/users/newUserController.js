// Importamos los modelos.
import insertUserModel from "../../models/users/insertUserModel.js";

// Importamos el error
import { missingFieldsError } from '../../services/errorService.js';


// Función controladora final que crea un nuevo usuario
const newUserController = async (req, res, next) => {
    try {
        // Obtenemos los datos del body.
        const { username, email, password } = req.body;

        // Si falta algún campo lanzamos el error
        if (!username || !email || !password) {
            missingFieldsError();
        }

        // Insertamos el usuario.
        // Hay que usar EL MISMO ORDEN en el que lo tenemos en el módulo de insertUserModel.js
        await insertUserModel(username, email, password);

        // Enviamos respuesta al cliente
        res.status(201).send({
            status: 'ok',
            message: 'Usuario creado'
        });
    } catch (err) {
        next(err);
    }
};

export default newUserController;