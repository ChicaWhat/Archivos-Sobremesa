import { suma, resta } from "./helpers.js";

import conectdb from "./dbconection.js";

import { desconectar } from "./dbconection.js";

console.log(suma(2,3));
console.log(resta(3,7));


conectdb();
desconectar();