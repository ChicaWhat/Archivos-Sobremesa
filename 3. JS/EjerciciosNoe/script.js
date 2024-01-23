'use strict'

/* EJERCICIOS DE TAREA:

    1er ejercicio: Saludar a un usuario a través de su nombre utilizando function.
    2do ejercicio: Crear un function que permita sacar el 10% de un número dado
    3er ejercicio: Calcular el área de un triángulo (base*altura/2)

*/

// - Ejercicio 01 - //


/* function saludarUsuario (nombre) {

    let mensaje = `Bienvenid@ ${nombre}`;
    console.log(mensaje);

}

saludarUsuario('Sofi');
saludarUsuario("Pepito Grillo");  */

/*  He creado una función cuyo nombre es saludarUsuario. El parámetro que voy a declarar es 'nombre'. Dentro de la función creo una variable mensaje que va a contener un string + el parámetro de mi función. Esta variable aparecerá en consola con mi console.log. Cierro la función, porque ya he definido lo que quiero que lleve a cabo.
Fuera de esta, nombraré a mi función tantas veces como yo quiera con el argumento que quiera que aparezca dentro de la variable mensaje. */


function saludarUsuario () {

    // let mensaje = prompt("Introduzca su nombre de usuario");
    let saludo = `Bienvenid@ ${mensaje}`;
    console.log(saludo);
}

/* saludarUsuario(); */


// - Ejercicio 02 - //

//El 10% de un número es el 0,1 de ese número.

// Sacara el 10% de 100 es 90. Cómo enfrento esto en una función? Este es un ejemplo, pero yo quiero que número = x


 function porcentaje(num1) {
    let cuenta = num1 * 0.1;
    let resultado =  /* num1 */ - cuenta;
    console.log(resultado);
}

/* porcentaje(100);
porcentaje(478);
porcentaje(7); */


// - Ejercicio 03 - //

function areaTriangulo (base, altura) {
    let resultado = (base*altura)/2;
    console.log(resultado); 
}

/* areaTriangulo(10, 7);
areaTriangulo(20, 5);  */

// No puede ser tan fácil... 

// EJERCICIO: crear un array con los siguientes números: 1200, 650, 70, 20, 900, 730, 150, 583, 710. Deberás mostrar los números mayores que 200 y menores que 800.



function condicion(){

    // Tengo un array llamado 'números' que contiene 9 elementos. 
    // Cada elemento se encuentra dentro de un índice.
    const numeros = [1200, 650, 70, 20, 900, 730, 150, 583, 710];
    // 0 a 8. Esos son los índices
    console.log(numeros)

                    // 8 < 9
    for (let i = 0; i < numeros.length; i++){
        /* let rango = i;
        console.log(numeros[rango]); */

        if(numeros[i] > 200 && numeros[i] <800){
            console.log(`Estos son los números entre 200 y 800: ${numeros[i]}`); 
        }
    }
} 

condicion();

// Un índice en un array es la posición de un elemento dentro de un array. Los índices comienzan siempre desde 0 y esto quiere decir que el primer elemento de un array está en el indice 0, el segundo en el 1. Así sucesivamente.
// Con .lenght obtenemos el número total de elementos que contiene el array elegido.

/* El bucleo que he creado significa que, si el índice es menor que el número de elementos que contiene el array, se vaya icrementando +1 en cada vuelta y me los muestre en consola.
1ª vuelta: el índice = 0, contiene el primer elemento: 1200.
2ª vuelta: el índice = 1, contiene el segundo elemento: 650.
3ª vuelta: el índice = 2, contiene el tercer elemento: 70.
4ª vuelta: el índice = 3, contiene el cuarto elemento: 20.
5ª vuelta: el índice = 4, contiene el quinto elemento: 900.
6ª vuelta: el índice = 5, contiene el sexto elemento: 730.
7ª vuelta: el índice = 6, contiene el séptimo elemento: 150.
8ª vuelta: el índice = 7, contiene el octavo elemento: 583.
9ª vuelta: el índice = 8, contiene el noveno elemento: 710. */

const numeros = [1200, 650, 70, 20, 900, 730, 150, 583, 710];

for (let numero of numeros ) {
    if(numero > 200 && numero < 800){
        console.log(numero);
    }
}