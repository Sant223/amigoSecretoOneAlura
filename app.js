// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombresAmigos = [];

// Funcion que captura el valor y lo agrega al array 
function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;
    if (nombre === ""){
        alert("Por favor ingrese un nombre");
    } else {
        nombresAmigos.push(nombre);
    }
    
}

// Funcion para limpiar la entrada
function limpiarCaja(){
    document.getElementById('amigo').value = '';
}