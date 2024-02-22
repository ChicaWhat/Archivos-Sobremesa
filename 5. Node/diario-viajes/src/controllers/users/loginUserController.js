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
        const { email, password } = req.body;

        if (!email || !password) {
            missingFieldsError();
        }

        // Seleccionamos los datos del usuario.
        const user = await selectUserByEmailModel(email);

        // Variable que almacenará un valor booleano indicando si la contraseña es correcta o no
        let validPass;

        // Si existeun usuario comprobamos si la contraseña coincide
        if (user) {
            // Comprobamos si la contraseña que nos llega del cliente coincide con la del usuario seleccionado.
            validPass = await bcrypt.compare(password, user.password);
        }
        
        // Si no existe usuario o si las contraseñas no coinciden lanzamos un error.
        if (!user || !validPass) {
            invalidCredentialsError();
        }

        // Creamos un objeto con la info que queremos meter en el token.
        const tokenInfo = {
            id: user.id,
            role: user.role,
        };

        // Creamos el token.
        const token = jwt.sign(tokenInfo, SECRET, {
            expiresIn: '7d',
        });

        // Cuando generemos el token, se usa el secreto para construír el token.
        // Por tanto, si queremos desencriptar el token, debemos usar el mismo secreto que usamos para generar el token.
        // Es como una llave.
        // Si hemos creado un token con el secreto: "hasjdbas89d" solo podrá ser desencriptado con el secreto: "hasjdbas89d"

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
