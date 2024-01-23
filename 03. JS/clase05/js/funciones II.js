'use strict'

// ARROW FUNCTION (funcion flecha)

/* const nombreFuncion = (parametros) => {
    instrucciones de la function
    return valor
} */

// 1er ejemplo sin parámetros

// Es bueno tener una const dentro de la variable. En el caso de que nos de error significa que debemos de cambiar const por let.
// El "=" significa asignación y se está transformando en función debido al "=>"
const saludo = () => {
    return "Hola";
}

console.log(saludo());

// Haciendo el ejercicio anterior pero con function
function saludarUsuario (){
    return "Hola";
}

console.log(saludarUsuario());

// 2do ejemplo

// En este ejemplo hemos obviado las llaves y el return, porque la flecha hace la función directa del return. Pero solamente si está en la misma línea de código.
const saludando = () => "Hola, pipol!";
console.log(saludando());

// 1er ejemplo con parámetros

// Cuando tenemos solo un parámetro, no hace falta colocar los (). Si tengo más de uno, si se deben de poner los ()
const producto = nombreProducto => `El producto comprado es :${nombreProducto}`
console.log(producto("PS5"));

// 2do ejemplo

const suma = (num1, num2) => num1 + num2;
console.log(suma(10, 6));