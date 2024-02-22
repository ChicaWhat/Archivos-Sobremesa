// Importamos las dependencias.
import express from 'express';

// Importamos las rutas
import entriesRoutes from './entriesRoutes.js';
import userRoutes from './userRoutes.js';

// Creamos un router.
const router = express.Router();

// Middleware que indica a express donde están las rutas
router.use(userRoutes);
router.use(entriesRoutes);

export default router;

// Este index.js unifica las rutas de los usuarios y las rutas de las entradas en un solo fichero