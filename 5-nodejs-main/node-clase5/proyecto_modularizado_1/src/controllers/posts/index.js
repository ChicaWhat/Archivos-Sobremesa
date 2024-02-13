// Cuando tenemos varios archivos que son importados en un mismo lugar es recomendable
// agruparlos y exportalos todos juntos.
import newPostController from './newPostController.js';
import listPostController from './listPostsController.js';
import getPostController from './getPostController.js';

// Exportamos las funciones controladoras.
export { newPostController, listPostController, getPostController };
