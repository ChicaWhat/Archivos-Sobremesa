// Importamos los modelos.
import selectAllEntriesModel from '../../models/entries/selectAllEntriesModel.js';

// Función controladora final que retorna el listado de entradas.
const listEntriesController = async (req, res, next) => {
    try {
        // Obtenemos el listado de entradas.
        const entries = await selectAllEntriesModel();

        res.send({
            status: 'ok',
            data: {
                entries,
            },
        });
    } catch (err) {
        next(err);
    }
};

export default listEntriesController;
