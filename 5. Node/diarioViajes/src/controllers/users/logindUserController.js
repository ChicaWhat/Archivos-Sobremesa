//Importamos dependencias necesarios
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Importamos los modelos
import selectUserByEmailModel from '../../models/users/selectUserByEmailModel.js';

// Importamos los errores
import {
    invalidCredentialsError,
    missingFieldsError,
} from '../../services/errorService.js';

// Importamos las variable de entorno
import { SECRET } from '../../../env.js';

// Función controladora final que logea a un usuario retornando un token
const loginUserController = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            missingFieldsError();
        }

        // Seleccionamos los datos del usuario
        const user = await selectUserByEmailModel(email);

        // Comprobamos si la contraseña que nos llega del cliente coincide con la del usuario seleccionado
        const validPass = await bcrypt.compare(password, user.password);

        // Si las contraseñas no coinciden lanzamos un error.
        if (!validPass) {
            invalidCredentialsError();
        }

        // Creamos un objeto con la info que queremos meter en el token
        // Recordar que, en el módulo selectUserByEmailModel.js comprobamos si hay algún usuario con el email proporcionado
        // usando un SELECT que señala la id, password y role. Entonces, aquí no se debe de olvidar ni la id ni el role.
        const tokenInfo = {
            id: user.id,
            role: user.role,
        };

        // Creamos el token
        const token = jwt.sign(tokenInfo, SECRET, {
            expiresIn: '7d',
        });
        // El método sign te pide los parámetros de tokenInfo, el SECRET (aporreamiento de teclado) y el tiempo límite para que expire el token creado

        res.status(201).send({
            status: 'ok',
            data: {
                token,
            }
        })

    } catch (err) {
        next(err);
    }
};

export default loginUserController;
