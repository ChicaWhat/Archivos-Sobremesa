'use strict'

// CALLBACK: es una función que se pasa como argumento a otra función y se ejecuta después de que se complete una tarea específica.
// La función del callback se va a llevar a cabo dentro de la función principal

// 1er ejemplo: creando una función que tome un número y un callback para imprimirlo

function imprimirNumero (numero, callback) {
    callback(numero);
}

imprimirNumero(42, function (num) {
    console.log(`El numero es: ${num}`);
});

// 2do ejemplo con funcion anonima
const ejecutarProceso = callback => {
    console.log("Inicio del proceso...");
    callback();
    console.log("Fin del proceso!");
}

ejecutarProceso( () => {
    console.log("Proceso en ejecución...");
});


// 3er ejemplo
const sumandoNumeros = (a, b, operacion, callback) => {
    callback(operacion(a, b));
}

sumandoNumeros(3, 5, (x,y) => x+y, resultado => console.log(`El resultado es ${resultado}`) );


/* IIFE --> expresion de funcion ejecutada inmediatamente

    (function(){
        Aquí va el código a ejecutar inmediatamente
    })();

*/

// 1er ejemplo
// Lo que quiere la IIFE es que no se mezclen las variables ni los resultados de las funciones globales con las locales
(function(nombre){
    console.log(`Hola ${nombre}`);
})("Pablo");

// 2do ejemplo
( function (numero){
    const cuadrado = numero * numero;
    console.log(`El cuadrado de ${numero} es ${cuadrado}`);
})(5);