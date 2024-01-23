/**
 * #################
 * ## Ejercicio 2 ##
 * #################
 *
 * Crea una función que imprima X resultados aleatorios de una
 * quiniela 1 X 2. Ejemplo, si le decimos que imprima 14 resultados:
 *
 *      Resultado 1: 1
 *      Resultado 2: X
 *      Resultado 3: 2
 *      (...)
 *      Resultado 14: 2
 *
 */

'use strict';


// resultado = 1, 2, X

/* Queremos crear una función con tres parametros aleatorios (1, 2, X) que se repita N veces las cuales, las indicará el usuario */

/* let min = 1;
let max = 3;

let resultado = Math.floor(Math.random()* (max - min + 1) + min); // esto es el número aleatorio

let resultadoFinal;

if (resultado === 3){
    resultadoFinal = "x";
}
else {
    resultadoFinal = resultado;
}

// console.log(resultadoFinal);

// let quiniela = +prompt ("¿Cuantos resultados quieres?");


function imprimirResultados (numeroResultados) {

    for( let i = 1; i <= ; i++ ){
        i = numeroResultados;
        console.log(`Resultado ${numeroResultados}: ${resultadoFinal}`);
    }

} */



function quiniela(limit) {
    //Creamos un bucle que se repita "limit" veces
    for (let i = 1; i <= limit; i++) {
        //Generamos un valor aleatorio entero entre 0 y 2
        const randomNum = Math.floor(Math.random() * 3);

        // Mostramos el resultado para la repetición actual
        if (randomNum === 0) {
            console.log(`Resultado ${i}: X`);
        } else {
            console.log(`Resultado ${i}: ${randomNum}`);
        }
    }
}

// Llamamos a la función anterior y le pasamos el argumento 14 al parámetro limit
quiniela(14);