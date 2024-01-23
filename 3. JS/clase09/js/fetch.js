'use strict'

/* FETCH


    fetch("https://...")
        .then() --> obtenemos los datos de la API en formato JSON y los convertimos a objeto literal.
        .then() --> aquí haremos lo que nosotros queramos con los datos que ya fueron convertidos a objeto literal.
        .catch() --> es opcional y mostraría un mensaje en el caso de que haya algún error con la API

*/

// 1er ejemplo con fetch() --> obtener datos de usuarios random

function obtenerDatosDeUsuarios(){

    fetch("https://randomuser.me/api")

    .then(function (response){
        return response.json();
    })

    .then(function(userData){
        console.log(userData.results[0].email);
        console.log(userData.results[0].location.country);
    })

}

// obtenerDatosDeUsuarios();

// 2do ejemplo con la api de pokemon

function pokemonDataVersion1(){

    fetch("https://pokeapi.co/api/v2/pokemon")

        .then(function(response){
            return response.json();
        })

        .then(function(data){
            console.log("--- Pokemon: Version 1 ---");
            console.log(`Nombre: ${data.results[3].name}`);
        })


}

// pokemonDataVersion1();

// 3er ejemplo con la api de pokemon (2da version con esta api)

const pokemonDataVersion2 = pokemonName => {

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

        .then( response => {
            if (!response.ok ){
                throw new Error("No encontramos informacion bajo ese nombre de Pokemon");
            }
            return response.json()
        })

        .then(data => {
            console.log("--- Pokemon Versión 2 ---");
            console.log(`Nombre: ${data.name}`);
            console.log(`Tipo de Pokemon: ${data.types[0].type.name}`)
            
            for ( let habilidad of data.abilities ){
                console.log(`Habilidad: ${habilidad.ability.name}`)
            }

        })

        .catch(error => {
            console.log(error.message);
        })

}

pokemonDataVersion2("vulpix");

// Mostrar las habilidades de cada pokemon