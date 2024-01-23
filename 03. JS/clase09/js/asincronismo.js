'use strict'

// Método asincrónico: las tareas se ejecutan de manera no secuencial. Ej: si tengo 3 tareas, puedo empezar por la segunda, luego la primera y por último, la tercera! Esto se debe a los tiempos.
// La programación asincrónica se trabaja con callbacks

/* setTimeout

    setTimeout (callback, delay)

*/

// 1er ejemplo
/* setTimeout(function(){
    console.log('Hoy es día de asincronismo!')
}, 3000); */

// 2do ejemplo utilizando callback
/* const ejecutarDespuesDe2Segundos = funcionCallback => {

    // setTimeout(funcionCallback, 2000);


    setTimeout(() => {
        const retorno = funcionCallback();
        console.log(retorno);
    }, 2000);
}

const miCallback = () => {
    const retornarMensaje ='Han pasado 2 segundos';
    return retornarMensaje;
}

ejecutarDespuesDe2Segundos(miCallback);

// 3er ejemplo con callback

const saludarUsuario = (nombre, callback) => {
    console.log(`Hola, ${nombre}, me quiero morir, gracias`);
    callback(nombre);
}

const despedirUsuario = nombre => {
    console.log(`Tranqui, ${nombre}`);
}

saludarUsuario("Pepe", nombre => {
    setTimeout( () => despedirUsuario(nombre), 2000);
} );
 */
// setInterval

// 1er ejemplo
/* const intervaloPrueba = setInterval(function(){
    console.log("Hoy es jueves!");
}, 4000) */

// 2do ejemplo
const cuentaRegresiva = () => {

    let segundos = 10;

    const tiempoAgotado = () => {

        if (segundos === 0) {
            console.log("El tiempo se ha agotado!");
            clearInterval(intervaloDeTiempo);
        } else {
            console.log(`Quedan ${segundos} segundos`)
            segundos --;
        }

    }
    return tiempoAgotado;

}

const actualizarCuentaRegresiva = cuentaRegresiva();
const intervaloDeTiempo = setInterval(actualizarCuentaRegresiva, 2000);