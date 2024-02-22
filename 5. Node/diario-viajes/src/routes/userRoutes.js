// Importamos las dependencias.
import express from 'express';

// Importamos las funciones controladoras finales.
import {
    newUserController,
    loginUserController,
    getOwnUserController,
    getPublicUserController,
    editUserAvatarController,
} from '../controllers/users/index.js';

// Importamos las funciones controladoras intermedias.
import { authUserController } from '../middlewares/index.js';

// Creamos un router.
const router = express.Router();

// Middleware de creación de usuario.
router.post('/users/register', newUserController);

// Middleware de login de usuario.
router.post('/users/login', loginUserController);

// Middleware que retorna info privada de un usuario.
router.get('/users', authUserController, getOwnUserController);

// Middleware que retorna info pública de un usuario
router.get('/users/:userId', getPublicUserController);

// Middleware que permite cambiar el avatar de un usuario
router.put('/users/avatar', authUserController, editUserAvatarController);

// Usamos la función intermedia de authUserController para la desencriptación del token
// y tener el ID del usuario

export default router;
