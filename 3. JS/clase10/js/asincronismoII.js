'use strict'

/* PROMESAS

    fetch()
        .then()
        .then()
        .catch()


ESTADOS DE LAS PROMESAS

1 - Promesa Pendiente. Cuando creamos una promesa, ya comienza en ese estado inicial: Pendiente. Aún no ha sido ni existosa ni se ha lanzado ni un error. 
2 - Promesa Cumplida. Cuando se resuelve la promesa, entra en un estado de promesa cumplida.
3 - Promesa Rechazada. Si la estructura está mal hecha, la promesa adquiere este estado. 

*/

// TODO -- CREAR UNA PROMESA

//* 1er ejemplo

const creandoPromesas = new Promise( (resolver, rechazar) => {
    const respuesta = "Acá obtenemos una respuesta del servidor";
    resolver(respuesta)
    rechazar("Falló la respuesta en el servidor");
} );

creandoPromesas.then(resultado => {
    console.log(resultado);
})

.catch(error => {
    console.error(error);
})

//* 2do ejemplo

function fetchUserData() {

    return new Promise( (resolve, reject) => {
        fetch(`https://randomuser.me/api`)
            .then(response => response.json)
            .then(data => resolve(data))
            .catch(error => reject(error))
    });
}

setTimeout(() => {
    fetchUserData()
        .then(userData => {
            console.log(userData);
        })
}, 2000)

// ASYNC - AWAIT

// ASYNC se usa para decir que esta función es asincrónica
// AWAIT se usa siempre con la función asincrónica y se coloca antes de una expresión que nos va a terminar de devolver una promesa

//* 1er ejemplo: vamos a tener una función que simula que devuelve una promesa que se resuelve después de un tiempo de espera determinado

function retraso(tiempoEnMilisegundos){
    return new Promise(resolve => setTimeout(resolve, tiempoEnMilisegundos));
}

async function resoluciondelRetraso(){
    try {
        console.log("Inicio de la espera...");
        await retraso(3000);
        console.log("Fin de la espera!");
    }

    catch (error) {
        console.log(error);
    }
}

resoluciondelRetraso();

//* 2do ejemplo  con la API de pokemon:

async function getPokemonData (pokemonName){
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

        if(!response.ok){
            throw new Error("No se pudo obtener la información del Pokemon");
        }

        const data = await response.json();
        console.log(`Nombre: ${data.name}`);
        console.log(`Tipo de Pokemon: ${data.types[0].type.name}`)

    }

    catch (error) {
        console.log(`Ha ocurrido un error: ${error.message}`);
    }

};

getPokemonData("pikachu");