'use strict'

// DESAFÍOS DE REPASO:

// DESAFÍO 1: Mostrar la suma de los números que irán desde el 1 hasta el 10 inclusive. Mostrar el resultado final de la suma. Se debe utilizar un bucle for.

// DESAFÍO 2: Mostrar los números desde 800 hasta 100 inclusive, bajando de 50 en 50. No mostrar los números 500 y 400.


/* 
let suma = 0;

 for(let i = 1; i <= 10; i++){
    suma += i; (suma= suma + i)
    console.log(`La suma de los números del 1 al 10 es ${suma}`)
} 
*/

// Lo que estamos haciendo es: la primera vuelta suma = 0, entonces i =1; 0+1=1
// Siguiente vuelte: suma = 1; i = 2; 1+2=3
// Siguiente vuelta: suma = 3; i=3; 3+3=6;
//Suma = 6; i=4; 6+4=10;
//Suma = 10; i=5; 10+5=15;
//Suma = 15; i=6; 15+6=21;
//Suma = 21; i=7; 21+7=28;
//Suma = 28; i=8; 28+8=36;
//Suma = 36; i=9; 36+9=45;
//Suma = 45; i=10; 45+10=55;


    


/*
 for (let i=800; i>=100; i-=50){
    if(i === 500){
        continue;
    }
    else if (i === 400){
        continue;
    }
    console.log(i);
 }
 */

/* let count = 800;

while (count >= 100) {
     if (count !== 500 && count !== 400) {
         console.log(count); 
     }
     count-=50;
} 
*/

 // me cago en mis muertos

 // FUNCIONES //
 /* CONJUNTO DE INSTRUCCIONES AGRUPADAS QUE SE PUEDEN USAR TANTAS VECES LO NECESITEMOS */
// SI FALTA ALGO DENTRO DE LA FUNCIÓN, NO SE VA A PODER EJECUTAR //

// Sin parámetros
// los parametros son variables que vamos a colocar dentro de la función y no se conocen fuera de la función. Pasa igual que con la variable creada en for.

function saludar(parametros) {
    console.log("Hola!");
}

// A LA FUNCIÓN SE LA EJECUTA NOMBRANDOLA + () + ;

saludar();

// Con parámetros - Realizando la suma de dos números

/* 1º Versión */
function suma(num1, num2){
    let resultado = num1 + num2;
    console.log(resultado);
    return resultado;
}

// Area de argumentos: se trata de lo que sea encuentra dentro de los () paréntesis de la función.

suma( 5 /*(num1)*/, 28 /*(num2)*/);
// suma( 90, 45);
// suma(120, 34);

// Una vez obtengas el resultado de la función suma() deberás multiplicar ese resultado a 2. Luego mostrar el resultado de esa multiplicación. Pero la variable resultado, es privada y solamente está dentro de la function de arriba. Para poder usar una variable que esté dentro de una función usamos la función 'return'. Por eso podemos usar en duplicar el resultado que nos da la función suma! Si NO TENEMOS EL RETURN PUESTO DENTRO DE LA FUNCIÓN NO PODREMOS OPERAR CON LOS RESULTADOS DE LA FUNCIÓN.    

let duplicar = suma(5, 28)*2;
console.log(duplicar);

// 2ª Versión

function sumandoNumeros(num1, num2, resultado){

    resultado= num1 + num2;
    console.log(resultado);
}

sumandoNumeros(23, 56); 

// 3er Versión

// Aquí lo que estamos creando son dos prompt dentro de la función y solamente se van a ejecutar una vez llamemos al parametro sumandoDosNumeros fuera de la función. Si borramos el parámetro, no se ejecutará la función prompt

function sumandoDosNumeros(){
    
    let num1 = +prompt("Ingresa tu primer número para realizar la suma");

    let num2 = +prompt("Ingresa tu segundo número para finalizar la operación");

    let resultado = num1 + num2;

    console.log(resultado);
}

// sumandoDosNumeros();

// 4ta Versión

// En esta versión, si añadimos las variables dentro de la función no hace falta tambien declararlas con el let

function sumarNumeros(num1, num2, resultado){
    
    /*let*/ num1 = +prompt("Ingresa tu primer número para realizar la suma");

    /*let*/ num2 = +prompt("Ingresa tu segundo número para finalizar la operación");

    /*let*/ resultado = num1 + num2;

    console.log(resultado);
}

// sumarNumeros();


// FUNCIONES ANIDADAS
// Crear una pequeña calculadora

function calculadora(num1, num2) {

    function sumar(){
        return num1 + num2;

    }

    function restar(){
        return num1 - num2;
    }

    function multiplicar(){
        return num1 * num2;
    }

    function dividir(){
        return num1 / num2;
    }

    let resultadoSuma = sumar();
    let resultadoResta = restar();
    let resultadoMultiplicacion = multiplicar();
    let resultadoDivision = dividir();

     
    console.log(`El resultado de la suma es: ${resultadoSuma}`);

    console.log(`El resultado de la resta es: ${resultadoResta}`);

    console.log(`El resultado de la multiplicación es: ${resultadoMultiplicacion}`);

    console.log(`El resultado de la división es: ${resultadoDivision}`);

}

calculadora(12, 3);

// FUNCIONES ANÓNIMAS //
//CONJUNTO DE INSTRUCCIONES QUE NO TIENEN NOMBRE Y SE PUEDEN GUARDAR EN UNA VARIABLE //

//El return no manda la información por si solo, hay que llamar al console.log para que nos devuelva la información de la función
// La variable es igual a una función sin nombre
let productos = function (nombre){
    return `El nombre del producto es: ${nombre}` ;
}

// Este console.log significa que llamo a la variable productos que tiene dentro la función la cual hemos declarado con el valor (nombre). 
console.log(productos("cafetera"));

// Realizando la versión 1 a través de un function común.
function productos2 (nombre) {
    return `El nombre del producto es: ${nombre}`;
}

console.log(productos2("sandwichera"));

// SCOPE : local y global
// Return devuelve EL VALOR de la variable. SOLO EL VALOR. La variable sigue estando dentro de la función y es como si estuviera aislada
let nombre = "Joaquin";

function saludo(){
    let nombre = "Juana";
    console.log(nombre);
    return nombre;
}

console.log(saludo()); // Juana
console.log(nombre); // Joaquín

// 2do ejemplo
// La diferencia con el ejemplo anterior es que hemos declarado let nombre tanto fuera como dentro de la variable y en el segundo ejemplo solo hemos declarado la variable apellido fuera de la variable.

let apellido; /* variable globa */

function retornarVariable(apellido)  {
    apellido = "Silva"; /* variable local */
    return apellido;
}

console.log(retornarVariable()); // Silva
console.log(apellido); // Silva


// EJERCICIOS DE TAREA:

// 1er ejercicio: Saludar a un usuario a través de su nombre utilizando function.

// 2do ejercicio: Crear un function que permita sacar el 10% de un número dado

// 3er ejercicio: Calcular el área de un triángulo (base*altura/2)










