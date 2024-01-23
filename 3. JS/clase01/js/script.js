"use strict" 
// 'use strict' se debe de poner SIEMPRE, porque nos va a avisar de cualquier error en el código.

//Objeto Console. Imprime mensajes en la Consola del navegador
console.log('Hola');
console.log(10+5);
console.log(20, 45, 2000);
console.error('Este es un mensaje de error');
console.info('Este es un mensaje informativo');
console.warn('Este es un mensaje de aviso');

// Variable --> let y const. Una variable es el contenedor de un valor. Una variable guarda un dato.
// Se puede comenzar a escribir el nombre de una variable con una letra en minúscula, un '_' o '$' 

// let
let nombreUsuario = "Juana";
console.log(nombreUsuario);
nombreUsuario = "Pedro";

// const. Una vez que asignemos un valor a la constante const, debemos de saber que NO se puede cambiar este valor.
const dni= "12345678A";
console.log(dni);
// dni = "12345678B" esto no se puede hacer, porque const es un valor que NO cambia.

/* TIPOS DE DATOS

- Tipos de datos primitivos. Valores que son únicos e inmutables. No se van a poder cambiar una vez que los hemos creado. Números, cadenas de textos (strings), booleanos (true, false), null (ausencia de un valor), undefined (falta la asignación de un valor).

-Tipos de datos de objetos. Su valor es mutable, es decir, puede cambiar. 

*/

// Ejemplo
let x = 15;
let y = x; // Estoy creando una copia de x en el valor y.
console.log(y);
console.log(x);
y = 20; // Aquí le acabo de asignar un nuevo valor a la y
console.log(y);

//2do ejemplo
let mensaje = "Hola"
let saludo = mensaje; // Hasta aquí saludo vale Hola.
console.log(saludo);
saludo = "Hola mundo"; // Aquí se le asigna un nuevo valor a saludo.
console.log(mensaje);
console.log(saludo);

// undefined. Una variable sin definir es una variable sin valor. Tenemos declarada la variable, pero no tiene un valor.
let variableSinValor; 
console.log(variableSinValor)

// null. Se usa cuando necesitamos indicar una ausencia de valor de manera intencionada.
let variableNula = null;
console.log(variableNula);

// Booleano (true | false)
let usuarioActivo = true;

// Tipo de datos de objetos (se verá más adelante):

// objetos

let coche = {
    color: "negro",
    marca: "Ford",
    modelo: "Focus",
    numeroAsientos: 4,
}

// arrays (traducción: orden, colección...)
let productos = ["Laptop", "Mouse", "Altavoces", "Disco Duro", "Tablet"]; 

// Detectando el tipo de dato
console.log(typeof mensaje); 
console.log(typeof x);

// TRABAJANDO CON STRINGS
//template literals
let mensaje1 = "Hola";
let mensaje2 = "Mundo";
// let mensajeFinal = mensaje1 + " " + mensaje2; // La cantidad de espacios que yo haga dentro de las comillas es la cantidad de espacio que se va a terminar realizando.
// let mensajeFinal = mensaje1+mensaje2;
// console.log(mensajeFinal);
let mensajeFinal = `${mensaje1} ${mensaje2}`;
console.log(`El mensaje final es: ${mensajeFinal}`); // Lo que ha hecho aquí es unir un string con una variable???

// concat
let mensaje3 = "Hola";
let mensaje4 = "Mundo";
let mensajeFinal2 = mensaje3.concat(mensaje4);
console.log(mensajeFinal2);

// Longitud.
// Sacar la longitud de un array
console.log(productos.length);

// Sacar la longitud de un string accediendo a un caracter especifico
console.log(mensajeFinal.length); // 10 teniendo en cuenta el espacio
console.log(mensajeFinal.charAt(mensajeFinal.length-1));


// TRABAJANDO CON NÚMEROS
// parseInt
console.log(parseInt(15.9)); // Te muestra un número decimal como un número entero

// parseFloat
console.log(parseFloat(15.7)); // Me mantiene el número decimal

// Number
console.log(Number(123));
console.log(Number(123.564));
console.log(Number("hola")); // Esto no lo va a detectar como número NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0

// isNaN
let valor1 = 20;
let valor2 = "Hola";

// Vamos a comprobar si los valores son NaN.
console.log(isNaN(valor1)); // falso, porque valor1 es un número
console.log(isNaN(valor2)); // true, porque valor2 no es un número

/* isFinite - un número finito es un número real que NO ES:
    - infinito negativo
    -infinito positivo
    - NaN
*/

let numero1 = 42;
let numero2 = Infinity;
let numero3 = -Infinity;
let numero4 = NaN;
let numero5 = 0

console.log(isFinite(numero1)); // true
console.log(isFinite(numero2)); // El resto da false
console.log(isFinite(numero3));
console.log(isFinite(numero4));
console.log(isFinite(numero5)); // true

// Number.isInteger()
let numero6 = 25;
let numero7 = 20.56;
let numero8 = 2/3;

console.log(Number.isInteger(numero6)); // true
console.log(Number.isInteger(numero7)); // false
console.log(Number.isInteger(numero8)); // false

// Aritmetica con JS utilizando el objeto Math
console.log(Math.pow(2,3));
console.log(Math.round(1.8));
console.log(Math.ceil(4.2)); // redondea a un entero mayor 
console.log(Math.floor(9.8)); // redondea a un entero menor
console.log(Math.max(200, 5, 1500)); 
console.log(Math.min(3, 5606, 34));
console.log(Math.random()); // elige un número aleatorio entre 0 y 1. Nunca llega a 1

// Mostrar los números aleatorios entre 5 y 10
const valorMin = 5;
const valorMax = 10;         
const numeroAleatorioFinal =Math.floor( Math.random() * (valorMax - valorMin + 1) + valorMin)
                                    // [0, 1) * 10 - 5 + 1 = 6 --> [0, 6)
                        // [0, 5) + 5 (se suma 5 a cada valor, es decir, tanto al 0 como al 5)
                        // [5, 10) 
// El Math.floor redondeará hacia abajo logrando tener como resultado un número entero entre el rango de [0, 5)

console.log(numeroAleatorioFinal);