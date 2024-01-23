'use strict'

// MÁS MÉTODOS DE ARRAYS

const colores = ["rojo", "verde", "azul", "turquesa", "naranja"];
// Quiero añadir un nuevo elemento en el indice 3, no quiero eliminar ningún valor (0) y lo voy a llamar "amarillo"
colores.splice(3,0, "amarillo");
// colores.splice(3,2,"amarillo"); --> eliminamos 2 valores desde la posicion 3 en adelante
console.log(colores);

// Comprobar si un elementa está dentro del array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers.includes(5)); // true
console.log(numbers.includes(15)); // false

// Devolver el índice de la primera ocurriencia de un elemento
// el .indexOf() sirve para sacar el índice del elemento que queramos
console.log(numbers.indexOf(8));

// Convertir un string en un array
const nombre = "Pedro Acosta";
const nombreArray = nombre.split(" ");
console.log(nombreArray);

// Convertir un array en un string
// Aprovechamos el array de numbers anterior
const cadenaDeNumeros = numbers.join(" - ");
console.log(cadenaDeNumeros);

// Invertir el orden de los elementos de un array
numbers.reverse();
console.log(numbers);

// Rellenar un array con un valor específico
numbers.fill(100, 2, 5); // fill(valor, inicio, fin)
// Se añadió desde el índice 2 hasta el 4 el valor 100.
console.log(numbers);

// DESTRUCTURING EN ARRAYS
// Quiero extraer valores de un array y transformarlos en variables
const numerosPares = [2,4,6,8,10];
const [primerNumeroPar, segundoNumeroPar, ...restoDeNumeros] = numerosPares;

console.log(primerNumeroPar); // 2
console.log(segundoNumeroPar); // 4
console.log(restoDeNumeros); // [6, 8, 10]

// Método forEach()
// Esto me sirve para iterar. Nos permite acceder a cada elemento de un array a través de una función. Hace como un bucle
// Tabajando con numerosPares utilizando función flecha =>
numerosPares.forEach((elementoNumero, indice, array) => {
    console.log(elementoNumero, indice, array);
});

// Trabajando con colores
colores.forEach((elementoColor, indice, array) => {
  console.log(elementoColor);  
})

// Trabajando con colores utilizando un function
colores.forEach( function(color) {
    console.log(color);
});

// EJERCICIO: dado el array numbers deberás utilizar el método forEach() para sumar 5 a cada número de este array y luego mostrar el resultado por consola.

// 1ª forma de realizar
/* numbers.forEach((numero) => {
    console.log(numero+5);
}); */

// 2da forma
numbers.forEach(elementoNumber => {
    let sumar5 = elementoNumber + 5;
    console.log(sumar5);
})

// 3ra forma
numbers.forEach (function(elementoNumber) {
    elementoNumber += 5;
    console.log(elementoNumber);
})


// Método some() --> utilizando el array de colores
// Este método tambien va a iterar el contenido del array color
console.log(colores.some(nombreColor => nombreColor === "azul"));

// every()
// Aqui le estamos diciendo que nombreColor.lenght acceda a cada letra de cada elemento del array y queremos saber: si cada elemento tiene mas o igual a 4 letras entonces es true. Si no cumple uno de los elementos esta condición, sería false
console.log(colores.every(nombreColor => nombreColor.length >= 4));

// Tanto forEach(), como Some(), como every() están iterando, es decir, cumplen como una función bucle

// find()
function buscarNombreUsuario(nombres, nombreEncontrado) {

    nombres = ["Ana", "Juana", "Carlos", "Elena", "Matias"];

    console.log(nombreEncontrado = nombres.find(nombreUsuario => nombreUsuario === "Ana")); // Aquí encuentra el valor Ana y eso es lo que se guarda en la variable

    if (nombreEncontrado) {
        console.log(`Se encontró el nombre: ${nombreEncontrado}`);
    } else {
        console.log(`No se ha encontrado ningún nombre`);
    }
}

buscarNombreUsuario();

// filter()

const numerosContiguos = [1,2,3,4,5,6,7,8,9,10];
const numPares = numerosContiguos.filter(numero => numero%2 === 0);
console.log(numPares);

// Version 1
function datosUsuarios (){

    //objeto, propiedad y valor
    /* const usuarios1 = {
        nombre: "Juan",
        apellido: "Romero",
        edad: 24
    } 

    console.log(usuario1); */

    const usuarios = [
        {nombre: "Rodrigo",
        edad: 22
        },
        {nombre: "Florencia",
        edad: 30}
    ];

    const edades = [];

    for(let i= 0; i < usuarios.length; i++){
        edades.push(usuarios[i].edad);
    }

    console.log(edades); // [22, 30]
}

// Version 2: Creando un array vacío donde se guardan edades que salen de un array de objetos

datosUsuarios();

function datosUsuarios2doEjemplo (){

    const usuarios = [
        {nombre: "Rodrigo",
        edad: 28
        },
        {nombre: "Florencia",
        edad: 60}
    ];
    
    const edades = usuarios.map(edadUsuario => edadUsuario.edad);
    console.log(edades);

}

datosUsuarios2doEjemplo();

// El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.

// reduce ()

const numerosAReducir = [1,2,3,4,5];
const suma = numerosAReducir.reduce(function (numero, acumulador){
    return acumulador + numero;
});

console.log(suma);














// EJERCICIO: Obtener la longitud total del siguiente array de strings (el resultado debe ser 9):
const palabras = ["Hack", "a", "Boss"];

const cadenaDePalabras = palabras.join("");
console.log(cadenaDePalabras);
console.log(cadenaDePalabras.length);


// EJERCICIO: Recorrer el siguiente array de peliculas y mostrar aquellas peliculas que comiencen con la letra A y los que comiencen con la letra S
const peliculas = [ "Avatar", "Superman", "Titanic", "Batman", "Star-Wars", "Jurassic Park", "Cenicienta", "Avengers", "Spiderman"];

// Ordeno el nombre de películas por orden alfabético
peliculas.sort();
console.log(peliculas);


for( let orden of peliculas ){
    // console.log(orden);
        if (orden.indexOf("A") === 0 || orden.indexOf("S") === 0){
            console.log(`${orden}`)
        }
}


/* for (let i = 0; i<peliculas.length; i++) {
    
    if (peliculas[i].indexOf("A") === 0 || peliculas[i].indexOf("S") === 0) {

        console.log(peliculas[i]);

    }
} */


// Metodo sort() para ordenar números
// Ordenar números
// Se comparan pares de elementos dentro del array 
const numeros = [5,2,8,1,30,25,12,200];
numeros.sort((a,b) => a - b);
console.log(numeros);

// a --> es el primer elemento a comparar
// b --> es el segundo elemento a comparar
/* return --> regresar un número negativo, 0 o positivo

- cuando el resultado de (a - b) es negativo, entonces "a" se coloca antes que "b"

- cuando el resultado de (a - b) es positivo, entonces "b" se coloca antes que "a"
*/