/* #################
 * ## Ejercicio 1 ##
 * #################
 *
 * Llegó el momento de poner en práctica todo lo aprendido hasta ahora para...
 * ¡¡DESACTIVAR UNA BOMBA!! Tranquilos, no tenemos que ser expertos en explosivos.
 * Se trata de crear un juego en el que damos al usuario 5 intentos para tratar de
 * desactivar la bomba.
 *
 * Estos son los pasos que debes seguir para tratar de conseguir el objetivo:
 *
 *  - Generar un nº aleatorio del 1 al 10. Existe una función en JavaScript que
 *    nos permite generar un nº al azar, ¿por qué no investigas un poco?
 *
 *  - Una vez hayamos generado el nº de desactivación daremos al usuario un total
 *    de 5 intentos para tratar de averiguar el nº en cuestión.
 *
 *  - Si acierta detenemos el bucle (con un break) y mostramos un mensaje que indica
 *    que la bomba ha sido desactivada. De lo contrario indicamos que la bomba ha explotado.
 */

'use strict';



let numMin = 1;
let numMax = 10;

let detonar = Math.floor(Math.random()* (numMax - numMin + 1)) + numMin; // esto es el número aleatorio

console.log(detonador);


'use strict'
let min = 1
let max = 10

let detonador = Math.floor(Math.random()*(max-min+1)+ min)
console.log(detonador)
let jugador = +prompt("elige un numero")

for(let i=1; i<5; i++){

    if(jugador!=detonador){
    console.log("fallo");
    jugador= +prompt("elige otro numero");
    }
    if(jugador===detonador){
        console.log("bomba desactivada");
        break;
    }
    if(i===4){
        console.log("la bomba exploto");
        break;
    }

}




// if (jugador === detonador){
//     console.log(`La bomba se ha desactivado.`);
// }
// else {
//     console.log(`Has fallado`);
//     let intento2 = +prompt(`Tienes 4 intentos más`)
// }
// if (intento2 === detonador){
//     console.log(`Has desactivado la bomba`)
// }
// else 



// let colorSemaforo = prompt (`¿De que color está el semáforo?`)
// // let colorSemaforo = 'verde';
// let accion;

// switch (colorSemaforo) {
//     case 'verde':
//         accion = 'Puedes avanzar!';
//         break;
    
//     case 'amarillo':
//         accion = 'Preparate para detenerte';
//         break;

//     case 'rojo':
//         accion = 'Frena!!';
//         break;    

//     default:
//         accion = 'Estado del sémaforo no válido'
//         break;
// }
// console.log(`El semáforo está en color ${colorSemaforo} ${accion}`);