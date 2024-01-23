'use strict'

// DOM

console.log(document);
console.dir(document);

// Seleccionar elementos
console.log(document.querySelector('p'));
console.log(document.querySelector('.textos'));
console.log(document.querySelector('#texto2'));

// seleccionar más de un elemento
console.log(document.querySelectorAll('p'));

// Accediendo al elemento en base a su ID
console.log(document.getElementById('texto3'));

// Accediendo al elemento en base a su clase
console.log(document.getElementsByClassName('textos'));

// Pasando un estilo a un elemento de html desde js
document.getElementById("tituloPrincipal").style.color = "red";

// Crear una variable donde le pasaremos estilos al elemento a través de la misma.
const parrafo1 = document.getElementById("texto1");
parrafo1.style.color = "white";
parrafo1.style.backgroundColor = "black";
parrafo1.style.padding = "20px";