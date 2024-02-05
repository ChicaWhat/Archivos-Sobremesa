'use strict'

import "dotenv/config"


const mode = process.env.MODE;

console.log(mode);

if(mode === "development") {

    console.log("El entorno activado es el de desarrollo");

} else if ( mode === "production") {

    console.log("El entorno activado es el de producción");

} else {

    console.log("Por favor, estable la variable de entorno MODE a 'development' o 'production'");

};