// Cuando tenemos varios archivos que son importados en un mismo lugar es recomendable
// agruparlos y exportalos todos juntos.
import handleErrorController from './handleErrorController.js';
import notFoundController from './notFoundController.js';

// Exportamos las funciones controladoras.
export { handleErrorController, notFoundController };
