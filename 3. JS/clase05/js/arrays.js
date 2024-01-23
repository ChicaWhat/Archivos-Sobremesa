'use strict'

// ARRAYS
// Los arrays puede almacenar cualquier tipo de dato.
// Hay que tener en cuenta la posición de los valores. Siempre empiezan a contabilizar en 0.

// Conociendo algunas maneras de creacion de arrays

// 1- Arrays Literales
let dias = ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"];

// console.log(dias);
console.log(dias.length);

// 2- Constructor de Arrays
let numeros = new Array (1,2,3,4,5);
console.log(numeros);

// 3- Operador Spread (...)
// Se conoce como el operador de propagación. Esto nos va a ir descomponiendo el array

let array1 = [1,2,3];
let array2 = [...array1];
console.log(array2);

let array3 = [4,5,6];
let array4 = [...array1, ...array3]; // Unir el array1 y el array3 en un nuevo array
console.log(array4);

let letras1 = ["A", "B", "C"];
let letrasFinales = [...letras1, "D", "E", "F"];
console.log(letrasFinales);

// Método from()
// Aquí solamente se puede trabajar con string, no con número. Y te muestra la posición que ocupa cada letra del string
let arraySaludo = Array.from("Hola");
console.log(arraySaludo);

// Array.of()
// Este método nos carga cualquier tipo de valor: vacío, string, números...
let miArray = Array.of(); // Creando un array vacío
console.log(miArray);
// Es interesante crear arrays vacios porque vienen datos de fuera.
let miArray2 = Array.of("Hola", "Adios");
console.log(miArray2);
let miArray3 = Array.of (1,46,344);
console.log(miArray3);

// Otra manera de crear un array vacío
let datos = [];
console.log(datos);

/* Cambiamos a const */
// Sobreescribir un valor del array
const productos = ["SmartTV", "Notebook", "Impresora", "Tablet", "Smartphone", "Aire Acondicionado"];
// Llamo al índice que queremos cambiar, en este caso Impresora que está en el indice 2 y le volvemos a dar un nuevo valor.
productos[2] = "Monitor";
console.log(productos);

// Agregar un valor al array conociendo el índice
productos[6] = "Cafetera";
console.log(productos);

// Agregar un valor en la primera posición
productos.unshift("Batidora", "Licuadora");
console.log(productos);

// Agregar un valor en la última posición
productos.push("Tostadora", "Audifonos");
console.log(productos);

// Eliminar el primer valor
productos.shift();
console.log(productos);

// Eliminar el último valor
productos.pop();
console.log(productos);

// Eliminar un valor según su índice
// A esto se le considera un array disperso. Hemos eliminado el índice 3.
delete productos [3];
console.log(productos);
// Le hemos agregado un nuevo valor al índice 3, porque este se había quedado vacío
productos[3] = "WebCam";
console.log(productos);

// Extraer un rango de valores
// Esto significa que me debe de extraer desde el índice 2 hasta el 5, sin incluirse este último
const productosExtraidos = productos.slice(2,5);
console.log(productosExtraidos);

// Modificar el último elemento del array
productos[productos.length-1] = "PS5";
console.log(productos);

// Ordenar valores de inicio a fin
// Esto solo funciona a nivel string, no para los números
const letrasOrdenadas = ["x", "a", "y", "n", "d"];
letrasOrdenadas.sort();
console.log(letrasOrdenadas);

const numerosOrdenados = [8, 200, 75, 98, 1];
numerosOrdenados.sort();
// Esto solamente ordena a través del primer dígito en números altos, no me los ordena con el verdadero orden
console.log(numerosOrdenados);

// RECORRER ARRAYS

// 1- For Loop
function arrayDeNombres (){
    const nombres = ["Raul", "Marcela", "Stella", "Alexis", "Pepita La De Los Palotes"]; // 0 a 4

                  //  0 < 5
    for(let i = 0; i < nombres.length; i++){
        console.log(nombres[i]);
    }
}

arrayDeNombres();

// 2- For of
// Este bucle solo sirve para los arrays y va de 0 en adelante aumentando de uno en uno. SOLAMENTE
function arrayDeNombres (){
    const nombres = ["Raul", "Marcela", "Stella", "Alexis", "Pepita La De Los Palotes"]; // 0 a 4
        // Llamo a mi variable nombre porque me va a enseñar los nombres del array

    for ( let nombre of nombres ){
        console.log(nombre);
    }
}

arrayDeNombres();

// EJERCICIO: crear un array con los siguientes números: 1200, 650, 70, 20, 900, 730, 150, 583, 710. Deberás mostrar los números mayores que 200 y menores que 800.