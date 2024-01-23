'use strict'

// BUCLES
// 1. Bucle While (mientras)
// Mostrar todos los números del 0 al 20 yendo de 2 en 2
let contador = 0;

while (contador <= 20) {
    console.log(contador);
    contador+=2;
}

// Contador descendente del 10 al 0
let count = 10;

while (count >= 0) {
    console.log(count);
    count--; 
}

// Mostrar la suma de los números que irán desde el 1 hasta el 10 inclusive. Mostrar el resultado final de la suma
// La lógica de este es que tienes que sumar el siguiente número que se va incrementando. Bueno, está explicado como una mierda.

let numero = 1;
let suma = 0;

while(numero <= 10){
    suma = numero + suma; //
    numero++;
}
console.log(`La suma de los numeros del 1 al 10 es: ${suma}`)

// suma+= numero;
// numero++

// 2. Bucle Do While
// Contador ascendente del 1 al 10
let aux = 1;

// do{
//     console.log(aux);
//     aux++;
// } while(aux <= 10)

do {
    aux++;
    console.log(aux);
} while(aux < 10)

// 3. Bucle For Loop (para)
// Contador ascendente del 1 al 5

for(let i = 1; i<=5; i++ ){
    console.log(i);
}

// La variable let i creada dentro del bucle for, está creada dentro del for y es exclusiva de este bucle. Se puede volver a usar en otro caso

// Mostrar todos los números divisibles por 4 entre 0 y 50
for(let i=0; i<=50; i++){

    if(i%4 === 0){
        console.log(i);
    }

}

// Otra forma de hacerlo
//for(let = i=0; i<=50; i+=4){
//  console.log(i);    
// }


// Uso del break
let numeroParEncontrado = null;

for(let i = 2; i <=10; i++){

    if(i%2===0){
        numeroParEncontrado = i; 
        console.log(`El primer numero par encontrado es ${numeroParEncontrado}`);
        break;
    }
}



// Uso de Continue (saltar una iteración)

for(let i=1; i<=6; i++){

    if(i === 4){
        continue;
    }

    console.log(i);

}

// Crear un patrón visual de una escalera de asteriscos
let escalonesAsteriscos = 10;

for(let i=1; i <= escalonesAsteriscos; i++){

    let escalon = "*".repeat(i);
    console.log(escalon);

}