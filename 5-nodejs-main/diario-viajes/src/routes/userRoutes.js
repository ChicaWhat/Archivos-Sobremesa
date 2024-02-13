// Importamos las dependencias.
import express from 'express';

// Importamos las funciones controladoras finales.
import {
    newUserController,
    loginUserController,
    getOwnUserController,
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

// Middleware que retorna info pública de un usuario. (Falta por importar y agregar la función controladora).
router.get('/users/:userId', ...);

export default router;
