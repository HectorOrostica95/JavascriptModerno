// Event Listener click al buscador 
/*
// alert("un alert");
// document.querySelector("#submit-buscador").addEventListener("click", function(e){
//     e.preventDefault();
//     alert("Buscando cursos");
// });
document.querySelector("#submit-buscador").addEventListener("click", ejecutarBoton);

function ejecutarBoton(e) {
    e.preventDefault();
    // console.log("Desde la funcion se ejecuta el boton");

    let elemento;
    elemento = e;
    elemento = e.target;
    elemento = e.target.id;
    elemento = e.target.className;
    elemento = e.target.innerText;

    console.log(elemento);
}
//Ejemplo con el nombre de "Cursos en linea";
document.querySelector("#encabezado").addEventListener("click", function(e) { 
    e.target.innerText = "Nuevo Encabezado";
    //console.log();
})
*/

/*
//Variables 
const encabezado = document.querySelector("#encabezado");
const enlaces = document.querySelectorAll(".enlace");
const boton = document.querySelector("#vaciar-carrito");

//Click
//boton.addEventListener("click", obtenerEvento);

//Doble Click
//boton.addEventListener("dblclick", obtenerEvento);

//Mouse Enter
//boton.addEventListener("mouseenter", obtenerEvento);

//Mouse Leave
//boton.addEventListener("mouseleave", obtenerEvento);

//Mouse Over
//boton.addEventListener("mouseover", obtenerEvento);

//Mouse out
//boton.addEventListener("mouseout", obtenerEvento);

//Mouse Down
//boton.addEventListener("mousedown", obtenerEvento);

//Mouse UP
//boton.addEventListener("mouseup", obtenerEvento);

encabezado.addEventListener("mousemove", obtenerEvento);
const busqueda = document.querySelector("#buscador");

//busqueda.addEventListener("keydown", obtenerEvento)
//busqueda.addEventListener("keyup", obtenerEvento)
//busqueda.addEventListener("keypress", obtenerEvento)
//busqueda.addEventListener("focus", obtenerEvento)
//busqueda.addEventListener("blur", obtenerEvento)
//busqueda.addEventListener("cut", obtenerEvento)
//busqueda.addEventListener("copy", obtenerEvento)
//busqueda.addEventListener("paste", obtenerEvento)
busqueda.addEventListener("input", obtenerEvento)

function obtenerEvento(e) {
    // console.log(busqueda.value);
    document.querySelector("#encabezado").innerText = busqueda.value;
    console.log("Evento ejecutado: " + e.type);
}

//Formas de detener el event bubbling
const card = document.querySelector(".card");
const infoCurso =  document.querySelector(".info-card");
const agregarCarrito = document.querySelector(".agregar-carrito");

card.addEventListener("click", function(e) { 
    console.log("Click en Card");
    e.stopPropagation();
});

infoCurso.addEventListener("click", function(e) { 
    console.log("Click en Info Curso");
    e.stopPropagation();
});

agregarCarrito.addEventListener("click", function(e) { 
    console.log("Click en Agregar a Carrito");
    e.stopPropagation();
    e.preventDefault();
});

*/
//Evento Delegation
document.body.addEventListener("click", eliminarElemento);

function eliminarElemento(e) {
    e.preventDefault();
    // console.log("Click!");
    // console.log(e.target.classList);
    
    if (e.target.classList.contains("borrar-curso")) {
        console.log(e.target.parentElement.parentElement.remove());
    }

    if (e.target.classList.contains("agregar-carrito")) {
        console.log("Curso agregado");
    }
}

//Continua en localStorage