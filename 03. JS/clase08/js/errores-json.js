'use strict'

// OBJETO ERROR


// *1er mensaje de error
const miError = /* constructor */ new Error("Se ha producido un error");
console.log(miError.message);

// *2do mensaje de error
// El try y el catch van de la mano, de la misma forma que el if/else
// Aqui, error funciona como un parámetro, pero sin serlo.
// Cath me detecta que la variable suma no existe y me lo marca como que no está definida (me da error)
// En try agregamos el código que PODRÍA generar un error. Si este no tiene mucho sentido, pasará a leer el catch. Pero si try tiene sentido y se puede leer, se leería esta línea de código.

try {  
    suma(); 
} 

catch (error) {
    console.log(error);
}

// El bloque finally sirve para liberar recursos, limpieza de tareas, cerrar conexiones de bases de datos, etc
// El finally cierra conexiones. Indica la finalización de las tareas anteriores numeradas. Sirve para cerrar etapas.

finally{
    console.log("Ha finalizado el proceso de ejecución")
}

// *3er mensaje de error
const dividir = (a, b) => {

    if( b === 0){
        throw new Error("No se puede dividir un número entre 0. Vuelve a intentarlo, gilipollas!");
    }

    return a / b;
// retornar NO devuelve el resultado por consola. 
}

// El catch tiene conexion DIRECTS con el throw new Error. El parámetro error de catch es el que realiza esta conexión
try {
    console.log(dividir(10, 5));    
}

catch (error) {
    console.error(error.message);
}


// Para poder enlazar la información que nosotros queremos mostrar en nuestro sitio web (el tiempo meteorológico), debemos de buscar la información en forma de API.

/* 
Objeto Json --> se utiliza para transmitir datos entre aplicaciones y servidores. Entonces, tenemos del lado del servidor un objeto JSON que vamos a consumir desde el lado del frontend. Cuando consumimos el JSON lo que se hace es transormarlo a objeto literal para que luego se pueda mostrar en el documento HTML.

JSON = JavaScript Object Notation

    - es un formato de texto simple para intercambiar infomación
    - es bastante ligero y fácil de leer por los humanos
    - deriva de JS pero es independientemente del lenguaje de programación
    - siempre la info se guarda en la estructura de pares de clave-valor

*/

const usuario = {
    nombre: "Pedro",
    apellido: "Sanchez"
}

// Creando un objeto literal de js

const persona = {
    nombre: "Susana",
    apellido: "Herrera",
    edad: 56,
    direccion: {
        calle: "Calle Falsa 123",
        ciudad: "LocuraLandia",
        pais: "ni existe"
    }
};

console.log(persona);

// Transforma de objeto literal a objeto JSON. Lo transforma en un string
const personaJSON = JSON.stringify(persona);
console.log(personaJSON);

// Transforma de objeto JSON a objeto literal
const personaJS = JSON.parse(personaJSON);
console.log(personaJS);
