'use strict'

// CLOSURES (clausuras o funciones de cierre) --> es una técnica en la que una función interna tiene acceso a las variables de su función externa.

//* 1er ejemplo

function exterior(num1){

    function interior(num2){
        return num1 + num2;
    }
    return interior;

}

const closureEjemplo = exterior(10);
console.log(closureEjemplo(5));

//* 2de ejemplo

function contadorDeNumeros(){

    let contador = 0;

    function incrementar(){
        contador++;
        return contador;
    }

    function decrementar(){
        contador--;
        return contador;
    }

    function valor(){
        return contador;
    }

    return {
        incrementar,
        decrementar,
        valor
    }

};

const miContador = contadorDeNumeros();
console.log(miContador); // Se verifica por consola las 3 funciones activas para poder utilizar
console.log(miContador.valor());
console.log(miContador.incrementar()); // 1
console.log(miContador.incrementar()); // 2
console.log(miContador.incrementar()); // 3
console.log(miContador.decrementar()); // 2
console.log(miContador.valor()); // 2