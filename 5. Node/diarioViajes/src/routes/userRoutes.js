// Importamos las dependencias.
import express from 'express';

// Definimos los endpoints
// Importamos las funcionales controladoras finales
import { newUserController, loginUserController } from '../controllers/users/index.js';

// Creamos un router.
const router = express.Router();

// Middleware de creación de usuario.
router.post('/users/register', newUserController);

// Middleware de login de usuario
router.post('/users/login', loginUserController);

export default router;
