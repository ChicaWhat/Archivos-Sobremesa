// Importamos las dependencias.
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Importamos los modelos.
import selectUserByEmailModel from '../../models/users/selectUserByEmailModel.js';

// Importamos los errores.
import {
    missingFieldsError,
    invalidCredentialsError,
} from '../../services/errorService.js';

// Importamos las variables de entorno.
import { SECRET } from '../../../env.js';

// Función controladora final que logea a un usuario retornando un token.
const loginUserController = async (req, res, next) => {
    try {
        // Importamos el email y la contraseña del body.
        const { email, password } = req.body;

        // Si faltan campos lanzamos un error.
        if (!email || !password) {
            missingFieldsError();
        }

        // Seleccionamos los datos del usuario.
        const user = await selectUserByEmailModel(email);

        // Comprobamos si la contraseña que nos llega del cliente coincide con la del usuario seleccionado.
        const validPass = await bcrypt.compare(password, user.password);

        // Si las contraseñas no coinciden lanzamos un error.
        if (!validPass) {
            invalidCredentialsError();
        }

        // Creamos un objeto con la info que queremos meter en el token.
        const tokenInfo = {
            id: user.id,
        };

        // Creamos el token.
        const token = jwt.sign(tokenInfo, SECRET, {
            expiresIn: '7d',
        });

        res.status(201).send({
            status: 'ok',
            data: {
                token,
            },
        });
    } catch (err) {
        next(err);
    }
};

export default loginUserController;
