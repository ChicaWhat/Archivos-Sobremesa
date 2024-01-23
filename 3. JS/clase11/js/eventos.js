'use strict'

// Conocer y modificar atributos //
const btnEnviar = document.getElementById("botonEnviar");
console.log(btnEnviar.getAttribute("type"));

// Deshabilitar un boton.
btnEnviar.setAttribute("disabled", true);

// Volver a activar el boton.
btnEnviar.removeAttribute("disabled");

// Comprobar si el elemento contiene un atributo de clase. Ya sea de clase, id o cualquier otro tipo.
console.log(btnEnviar.hasAttribute("class"));

/*  EVENTOS
Son funciones que se ejecutan en el documento HTML y se ejecutan mediante  la interacción que haga el usuario sobre la página.

    Hay dos maneras para poder aplicarlos:
        - Método tradicional
        - Método Actual

*/

// Método tradicional
btnEnviar.onclick = function (){
    console.log("Acabas de realizar un click clickando en el ratón! eres un/a máquina!");
}

// Método actual
const btnStart = document.getElementById("botonStart");
btnStart.addEventListener(`click`, function(){
    console.log("Acabas de realizar un click utilizando el método actual")
});

// Agregar un color al párrafo 1
const btnColor = document.getElementById("botonColor");
const parrafo1 = document.getElementById("texto1");

const cambiarColor = function(){
    parrafo1.style.color = "red";
}

btnColor.addEventListener(`click`, cambiarColor);

// Event objects
const informacionClick = function(event){
    console.log(event);
}

btnColor.addEventListener(`click`, informacionClick);

// Teniendo en cuenta los 3 botones creados de html, css y js quee stán en el archivo de HTML, debemos acceder al elemento específico al que se está haciendo click.

function mostrarMensaje(event){

    const elemento = event.target; // Terminar de completar
    // console.log(elemento);

    if(elemento.id === 'boton_html'){
        console.log("Has clickado en el botón HTML");
    }

    else if(elemento.id === 'boton_css'){
        console.log("Has clickado en el botón CSS");
    }

    else if(elemento.id === 'boton_js'){
        console.log("Has clickado en el botón JS");
    }

}

const botones = document.querySelectorAll("button");
botones.forEach(function(boton){
    boton.addEventListener(`click`, mostrarMensaje);
});

//Mas eventos
// Doble click
btnColor.addEventListener('dblclick', () => {
    parrafo1.style.color = "orange";
});

// Detectar cuando el mouse se acerca sobre un elemento
btnStart.addEventListener("mouseover", () => {
    console.log("Hola");
});

// Detectar cuando el mouse se aleja del elemento
btnStart.addEventListener('mouseout', () => {
    console.log("A tomar por culo");
});

// Detectar cuando ingresamos un dato al elemento input
const ingresoDato = document.getElementById('ingresoDeDato');
ingresoDato.addEventListener('focus', () => {
    console.log("Ingresaste al input");
});

// Detectar cuando nos vamos del input
ingresoDato.addEventListener('blur', () => {
    console.log('Te fuiste (a tomar por culo) del input');
});

// Eventos de teclado
ingresoDato.addEventListener('keyup', (event) => {
    console.log(`Estamos presionando la tecla ${event.key}`);
});

// Prevenir (quitar) el comportamiento predeterminado de un elemento
const webHack = document.getElementById('webOficialHack');
webHack.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('Acabas de realizar un click en el enlace');
});