//me traigo todas las funciones que estan dentro de MODULO funciones
const funciones = require('./src/service/funciones');
const db = require('./src/database/db');

//console.log(funciones);
// console.log(funciones.getMayor(12,44));
// console.log(funciones.getSuma(34,128));

const personas = db.getAllData();
console.log(personas);

console.log(db.getAllData());

console.log(db.getMayorEdad());