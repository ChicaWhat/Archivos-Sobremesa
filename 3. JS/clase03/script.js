'use strict'

// SWITCH
// Recrear un semáforo

let colorSemaforo = "verde";
let accion; // Se puede nombrar una variable sin añadirle ningún valor

switch (colorSemaforo) {
    case "verde":
        accion = "puedes caminar!"
        break; // El break es el corte del case y es importante que esté.

    case "amarillo":
        accion = "cuidaito"
        break;

    case "rojo":
        accion = "para, loc@!";
        break;

    default:
        accion = "no entiendo qué me quieres decir."
        break;
}

console.log(`El semáforo está en color ${colorSemaforo} ${accion}`);

// Ejercicio: días de la semana
// Del 1 al 5 son días laborales y del 6 al 7 es fin de semana. Si se ingresa otro número no corresponde a un día de la semana.

// let numeroDeDia = +prompt("Dime en qué número de día de la semana estás");
// let tipoDeDia;

// switch (numeroDeDia) {
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//         tipoDeDia = "Es un día laborable";
//         break;

//     case 6:
//     case 7:
//         tipoDeDia = "Es fin de semana";
//         break;

//     default:
//         tipoDeDia = "El número de día que ingresaste no es válido";
//         break;
// }

// console.log(`El día número ${numeroDeDia} es un ${tipoDeDia}`);

// CONVERSIONES
// 1- de número a cadena
let num = 20;
let cadena1 = num.toString(); // "20"
let cadena2 = num + ""; // "20"

console.log(cadena1);
console.log(cadena2);

// 2- de cadena a número
let cadena3 = "50";
let num1 = parseInt(cadena3);
let num2 = Number(cadena3);
let num3 = +cadena3;

console.log(num1, num2, num3); // Se puede comprobar, en una sola línea, separando cada variable con comas.

// 3- A booleano (true o false)
let cadenaVacia = ""; // una cadena vacia siempre va a ser falso
let cadenaCompleta = "Hack a Boss"; // una cadena con string dentro siempre va a ser true
let num4 = 0; // el 0 siempre va a ser false
let num5 = 1; // el 1 siempre va a ser true

let booleano1 = Boolean(cadenaVacia);
let booleano2 = Boolean(cadenaCompleta);
let booleano3 = Boolean(num3);
let booleano4 = Boolean(num4);

console.log(booleano1);
console.log(booleano2);
console.log(booleano3);
console.log(booleano4);

// CASOS ESPECIALES DE COERSION DE JS
console.log(1+2+"3"); // al haber un string dentro de una suma, no hace falta que se le coloque un paréntesis a la suma para diferenciarlo entre ellos. Está concatenando una suma con un string 

console.log("4" + 5 + 6); // 456 // Esta concatenando todo a string, porque comienza en string. 
console.log("4" + 5 * 6); // 430
console.log("4" + (5 + 6)); // 411
console.log("4" + 5 - 6); // 39
console.log("9" - 3); // 6
console.log(10 - "2"); // 8
console.log(true + true); // 2 // el true=1 entonces esto es 1+1
console.log("5"*"6"); // 30 // Se convierte en una operación aritmética aunque esté declarado como sting. Ocurre tambien con el -, /. Con la suma no.
let number = 20 - "x"; // NaN. El string x no se puede convertir a ningún número, entonces se devuelve como un NaN

