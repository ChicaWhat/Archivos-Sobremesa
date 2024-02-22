const path = require('path');

//setear rutas personalizadas
const ruta = path.join('/src','database','js','algo.txt');

const pathImgUser = path.join('/src','images','users');

const pathImgProducts = path.join('/src','images','products');

console.log(pathImgUser);
console.log(pathImgProducts);

console.log(path.basename(pathImgUser));