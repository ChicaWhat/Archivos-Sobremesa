'use strict'
// LocalStorage

// Guardar datos
function guardarDatos() {
    localStorage.setItem("marcaCoche", "Audi");
}

guardarDatos();

// Pedir un dato
const pedirDato = localStorage.getItem("marcaCoche");
console.log(pedirDato);

// Guardar un objeto

function guardarUsuario(){

    const usuario = {
        nombre: "Josefina",
        email: "jose@gmail.com",
        edad: 34
    }

    localStorage.setItem("usuario", JSON.stringify(usuario));

}

guardarUsuario();

// Obtener el objeto nuevamente

function obtenerDatos(){
    const usuario = JSON.parse(localStorage.getItem("usuario"));
    console.log(usuario);
}

obtenerDatos();

// Eliminar un dato
function eliminarDato(){
    localStorage.removeItem("usuario");
}

eliminarDato();

// Eliminar todos los datos
function eliminarTodosLosDatos(){
    localStorage.clear();
}

eliminarTodosLosDatos();