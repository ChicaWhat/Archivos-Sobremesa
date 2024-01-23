"use strict";

const nombre = "Carmen";
let edad = 28;
const diasSemana = 7;
const mesesAnio = 12;

console.log(nombre);
console.log(edad);
console.log(diasSemana);
console.log(mesesAnio);

let ciudad = "Marbella";

const presentacion = `Hola soy ${nombre} y vivo en ${ciudad}.`;

console.log(presentacion);

/*1. Se puede crear la constante del string que queramos averiguar la longitud y luego declararlo en console.
const cadena = "All work and no play makes Carmen a dull girl."; 
console.log(cadena.length); // 46 caracteres */

/*2. Se puede averiguar el número de caracteres directamente de un string
console.log("All work and no play makes Carmen a dull girl.".length); */

/*3. Pruebo otra manera de contar los caracteres de un string o comentario.
He creado la variable y luego, a través de console he creado una frase y he acabado kf */

const cadena = "All work and no play makes Carmen a dull girl.";
console.log(`El total de caracteres de la frase son: ${cadena.length}`);