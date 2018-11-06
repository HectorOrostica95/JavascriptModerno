//Variables 
const carrito = document.getElementById("carrito");
const cursos = document.getElementById("lista-cursos");
const listaCursos = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.getElementById("vaciar-carrito");

//Listeners
cargarEventListerners();

function cargarEventListerners() {
    //se ejecuta cuando se presiona "Agregar Carrito"
    cursos.addEventListener("click", comprarCurso);

    //Cuando se elimina un curso del carrito
    carrito.addEventListener("click", eliminarCurso);

    //Cuando se realiza click en el boton vaciar carrito
    vaciarCarritoBtn.addEventListener("click", vaciarCarrito);
}


//Funciones
//Funcion que añade el curos al carrito 
function comprarCurso(e) {
    e.preventDefault();
    //Solo reacciona al realizar click en "Agregar al carrito" 
    if (e.target.classList.contains("agregar-carrito")){
        const curso = e.target.parentElement.parentElement;
        //Enviamos el curos seleccionado para tomar sus datos
        leerDatosCurso(curso);
    };
}

//Leer los datos del curso
function leerDatosCurso(curso) {
    const infoCurso = {
        imagen: curso.querySelector("img").src,
        titulo: curso.querySelector("h4").textContent,
        precio: curso.querySelector(".precio span").textContent,
        id: curso.querySelector("a").getAttribute("data-id")
    }

    insertarCarrito(infoCurso);
}

//Muestra el curso seleccionado en el carrito de compras
function insertarCarrito(curso) {

    const row = document.createElement("tr");

    //Se crea el template para que este pueda ser insertado en el carrito
    row.innerHTML = `
    <td>
        <img src="${curso.imagen}" width=100>
    </td>
    <td>${curso.titulo}</td>
    <td>${curso.precio}</td>
    <td>
        <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
    </td>
    `;
    listaCursos.appendChild(row);
};

//Elimina el cursos del carrito en el DOM
function eliminarCurso(e) {
    e.preventDefault();
    let curso;

    if ( e.target.classList.contains("borrar-curso") ) {
        e.target.parentElement.parentElement.remove();
    }
}

//Elimina todos los cursos del carrito en el DOM
function vaciarCarrito() {
    //Forma lenta de limpiar el carrito de compra
    //listaCursos.innerHTML = "";

    //Forma rapida y la vez la recomendada
    while (listaCursos.firstChild) {
        listaCursos.removeChild(listaCursos.firstChild);
    }

    return false;
}