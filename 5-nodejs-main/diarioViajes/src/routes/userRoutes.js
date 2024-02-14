// Importamos las dependencias.
import express from 'express';

// Definimos los endpoints
// Importamos las funcionales controladoras finales
import { newUserController } from '../controllers/users/index.js';

// Creamos un router.
const router = express.Router();

// Middleware de creación de usuario.
router.post('/users/register', newUserController);

export default router;
