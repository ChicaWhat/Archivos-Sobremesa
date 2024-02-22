// Importamos las dependencias.
import express from 'express';

// Importamos las funciones controladoras finales.
import {
    newEntryController,
    listEntriesController,
    getEntryController,
} from '../controllers/entries/index.js';

// Importamos las funciones controladoras intermedias.
import { authUserController } from '../middlewares/index.js';

// Creamos un router.
const router = express.Router();

// Middleware que permite crear una entrada.
router.post('/entries', authUserController, newEntryController);

// Middleware que retorna el listado de entradas.
router.get('/entries', listEntriesController);

// Middleware que retorna info de una entrada concreta.
router.get('/entries/:entryId', getEntryController);

export default router;
