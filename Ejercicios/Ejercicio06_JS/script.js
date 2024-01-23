'use strict'

// - EJERCICIO 06 - //

const num1 = 7;
const num2 = 4;

// const respuesta = (num1 + num2);
// console.log(respuesta);

console.log(`La respuesta a esta suma es ${num1 + num2}`);

// - EJERCICO 07 - //

let numMin = 1;
let numMax = 10;
let numAleatorio = Math.floor(Math.random() * (numMax - numMin + 1) + numMin);

console.log(`Un número aleatorio comprendido entre ${numMin} y ${numMax} es ${numAleatorio}`);

// Esta es la operación que se debe de hacer para generar que la consola nos proporcione un número aleatorio comprendido entre un min y un max.
// console.log(Math.floor(Math.random() * (numMax - numMin + 1) + numMin));

// - EJERCICO 08 - //

const a = 5;
const b = 10;
const c = 15;

const suma = a + b;

// como a + b = c entonces suma === c (true). 

if(suma === c){
    console.log("La suma de a+b es igual a 15");
}
else {
    console.log("a + b no es igual a 15");
}

// console.log(`Podemos comprobar que ${suma} es igual a ${c}, entonces ${suma === c}`)
// console.log(suma === c)

console.log(`El valor de ${a} + ${b} = ${c}? ${suma === c}`)

// - EJERCICIO 09 - //

// let numeroComprobar = % 2


// if(numeroComprobar % 2){
//     console.log(`El ${numeroComprobar} es PAR`);
// }
// else {
//     console.log("Es IMPAR");
// }



