'use strict'

// let edad = +prompt("¿Cuántos años tienes?");
// console.log(edad);
// alert(edad);

/* Todo lo que se ingresa con prompt va a ingresar como string (cadena de texto). 
Si queremos cambiarlo a number usamos parseInt 
Tambien podemos usar el símbolo '+'
*/

// let respuesta = confirm("¿Estás seguro de que deseas continuar en nuestro sitio?");


// OPERACIONES ARITMÉTICOS (suma, resta, multiplicación, división, módulo, exponente, incremento, decremento)
// El módulo es lo que sobra de una división (conocido como resto). Habrá ocasiones que el módulo=0 o módulo diferente a 0.
// módulo => %

let sacandoModulo = 10%3; // Resultado = 1
console.log(sacandoModulo);

// exponente (un numero elevado a otro numero) (dos ** eleva)
let sacandoExponente = 3 ** 3;
console.log(sacandoExponente);

//incremento y decremento
// El ++ incrementa a una unidad más del valor original
let i = 0;
console.log(i++); // post incremento. Primero retorna el valor orginal, luego hace el incremento
console.log(i); // Verifico si la variable fue incrementada
console.log( i = i +2); // Vale 3
console.log(++i); // pre incremento
console.log(i--); // Muestra 4 en consolo. pero internamente ya hay 3
console.log(i);

// OPERADORES DE COMPARACION


/* OPERADORES LÓGICOS

    && --> AND
    || --> OR
    !  --> NOT
*/

// Si tenemos aunque sea un true en || va a ser todo true
// Si tenemos solo un false dentro de && va a ser todo false
// ! va a dar la vuelta siempre a lo que tenga delante


// CONDICIONES
// IF ELSE
/*
    if (condicion (true)){
        se va a ejecutar el código siempre y cuando se cumpla la condición

    }

    else{
        se va a ejecutar el código cuando no se cumpla la condición 
    }

*/

// Detectar si un número es par o impar
let numero = 10;

if (numero % 2 === 0){
    console.log("El número es par");
}

else {
    console.log("El número es impar");
}


// Preguntar al usuario cómo se llama y si su nombre contiene más de 4 letras se deberá informarle que tiene un nombre largo. Caso contrario tiene un nombre corto.

// let nombre = prompt("Dime tu nombre y te diré si es largo o corto");

// if (nombre.length > 4) {
//     // Si el nombre es Joaquín .length me leerá el numero de caracteres del nombre y se cumplirá uno de los dos condicionales
//     console.log("Tu nombre es largo en cuestión de caracteres");
// } else {
//     console.log("Tu nombre es corto en cuestión de caracteres.");
    
// }

// PARA PENSAR SIN VER EN LA CONSOLA
// ¿True o false?

// 1° expresión
let x = 32;
let y = "a";

y === "b" && x >= 32 
// false  && true
// false


// 2° expresión
let a = 5;
let b = 8;

console.log( ! (a == "5" || a === b) && ! (b != 8 && a <= b ));
// ! (true || false ) && ! (false && true)
// ! (true) && ! (false)
// false && true 
// false

// ANIDACIÓN
let edad = 25;
let tienePermisoDeConducir = true;

if(edad >= 18){
    console.log("Eres mayor de edad.");

    if(tienePermisoDeConducir){
        console.log("Tienes permiso para conducir coche y moto.");
    }

    else{
        console.log("No tienes permiso para conducir.");
    }

}

else{
    console.log("Eres menor de edad.");
}

// CONDICIONAL IF, ELSE, IF, ELSE (tenemos 2 condiciones a analizar)

/* --- EJERCICIO: número positivo y número negativo 

Debemos pedirle al usuario que nos diga un número. 
Si el número que nos brinda es positivo, entonces informarle "El número que has elegido es positivo". 
Si el número que nos brinda es negativo, entonces informarle "El número que has elegido es negativo". 
Si la persona ha ingresado un dato que no es numérico informarle que el dato no es un valor numérico válido. 

Extra: ¿qué sucede en el caso que la persona diga que el número es un 0 (cero)?
*/

// let num = +prompt("Ingresa un número");

// if(num > 0){
//     console.log("El número es positivo");
// }

// else if(num < 0){
//     console.log("El número es negativo");
// }

// else if(num === 0){
//     console.log("Cero es un número neutral");
// }

// else{
//     console.log("El valor que has ingresado no es un número válido");
// }


/* EJERCICIO: Preguntarle al usuario qué hora es actualmente e informarle cuáles son los turnos del día en base a su horario. Teniendo en cuenta lo siguiente: 

- Turno mañana es de 6 a 14
- Turno tarde es de 14 a 22 
- Turno noche es de 22 a 6 

if, else if y operadores de comparacion y operadores logicos
*/

let horario = +prompt("¿Qué hora es?")

if(horario>=6 && horario<14){
    console.log("El turno es de mañana");
}

else if(horario>=14 && horario<22){
    console.log("El turno es de tarde");
}


else if(horario > 24){
    console.log("El turno no existe");
}

else{
    console.log("El turno es de noche");
}


// else(horario>=22 && horario<6){
//     console.log("Es el turno de noche");
// }


//FORMA DE HACERLO DE DANI
// let hora = +prompt("¿Qué hora es?");

// if(hora >=6 && hora < 14){
//     console.log("Estás en el turno de mañana");
// }

// else if(hora >= 14 && hora < 22){
//     console.log("Estás en el turno de tarde");
// }

// else if(hora > 24){
//     console.log("Valor introducido no válido");
// }

// else {
//     console.log("estás en el turno de noche");
// }

// OPERADOR TERNARIO (manera más corta de escribir un if/else)
// Número par o impar

// let number = 10;
// let esPar = number % 2 === 0 ? "El número es Par" : "El número es impar"
// console.log(esPar);