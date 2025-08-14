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
    console.log(nombresAmigos);

    limpiarCaja();
    actualizarLista();
}

// Funcion para limpiar la entrada
function limpiarCaja(){
    document.getElementById('amigo').value = '';
}

// Funcion para mostrar en pantalla los nombres agregados
function actualizarLista(){
    let lista = document.getElementById('listaAmigos'); // Seleccionar el elemento <ul>
    lista.innerHTML = ""; // lo vacia
    
    for(let i = 0; i <= (nombresAmigos.length-1); i++){
        const li = document.createElement('li'); // creacion del elemento <li></li>
        li.innerText = nombresAmigos[i]; // se captura el nombre de la lista de nombres
        lista.appendChild(li); // se agrega a la lista
    }
}