'use strict'

// debemos de colocar el document para conectar la constante con el html
// Pasando estilos a través de una variable en el propio código de JS
const parrafo1 = document.getElementById("texto1");
parrafo1.style.color= "red";
parrafo1.style.background= "black";

// Pasar estilos mediante una clase ya creada previamente en el archivos style.css
const parrafo2 = document.getElementById("texto2");
// ClassList para agregar una clase y add para saber qué clase estoy agregando
parrafo2.classList.add("estilo");

// Eliminar un estilo que viene a través de una clase
parrafo2.classList.remove("estilo");

// Acceder al texto de un elemento con innerHTML
console.log(parrafo1.innerHTML);

// Acceder al texto de un elemento con textContent
console.log(parrafo2.textContent);

// Cambiando un valor por otro
const parrafo3 = document.getElementById("texto3");
parrafo3.textContent = "Estamos cambiando al texto 3";

// Iteramos una seccion que contiene 2 elementos en este caso <p>
const parrafosDeLaSeccion = document.querySelectorAll("section>p");

for (const parrafo of parrafosDeLaSeccion){
    parrafo.style.color = "orange";
}

// Iterar la lista de tareas y agregarle un estilo
// Podemos accedar a cada ul a través de las clases
const tareas = document.getElementsByClassName("listaDeTareas");

for (let i = 0; i < tareas.length; i++){
    tareas[i].style.background = "green"
}

// Agregar un nuevo elemento al DOM
const nuevoParrafo = document.createElement("p");
nuevoParrafo.textContent = "Hola!";
document.getElementById("saludo").appendChild(nuevoParrafo);

/* Otra manera de agregar elementos a la página

    elemento.insertAdjacentHTML(posicion, contenidoAgregado);

*/
const webOficial = document.getElementById("webOficialHack");

webOficial.insertAdjacentHTML("beforeend", 

    `
    <p> A continuación te dejamos el link de la web oficial de Hack A Boss </p>
    <a href= "https://www.hackaboss.com/"> Link a la web </a>

    `
);

// EJERCICIO: teniendo en cuenta la lista desordenada que tenemos en el html, en este caso la lista de tareas 1, deberás agregar un nuevo item a la lista desde JS. Este item deberá decir "Tarea 4" y a su vez deberá heredar el color que ya tenian los demas items.
const nuevaLista = document.createElement("li");
nuevaLista.textContent = "Tarea 4";
tareas.appendChild(nuevaLista);

/* 
const ej= document.getElementById("1")
ej.insertAdjacentHTML("beforeend",
`
<li> tarea 4</li>

`)
let tareas= document.getElementById("1").getElementsByTagName("li");

for(let i=0; i <tareas.length; i++){
    tareas[i].style.color= "yellow"
}
*/