//Pasos para armar el programa de saludo
//1)Escuchar el evento click.

const boton = document.getElementById('boton');
boton.addEventListener('click',preguntarNombre);

const h1 = document.getElementById('nombre');
const h2 = document.getElementById('h2');

//2)Preguntar y guardar el nombre dle usuario.

function preguntarNombre(){
    const nombre = prompt('Introduzca su nombre')
    mostrarNombre(nombre);
}

//3)Insertar el nombre donde ahora estan los tres puntos.

function mostrarNombre(nombre){
    h2.textContent = 'Hola';
    h1.textContent = nombre;
}