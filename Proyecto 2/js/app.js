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

    //Al cargar el documento, mostrar LocalStorage
    document.addEventListener("DOMContentLoaded", LeerLocalStorage);
}

//Funciones
//Funcion que añade el cursos al carrito 
function comprarCurso(e) {
    e.preventDefault();
    //Solo reacciona al realizar click en "Agregar al carrito" 
    if (e.target.classList.contains("agregar-carrito")){
        const curso = e.target.parentElement.parentElement;
        //Enviamos el cursos seleccionado para tomar sus datos
        leerDatosCurso(curso);
    };
}

//Leer los datos del cursos
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
    guardarCursoLocalStorage(curso);
};

//Elimina el cursos del carrito en el DOM
function eliminarCurso(e) {
    e.preventDefault();
    let curso, cursoId;

    if ( e.target.classList.contains("borrar-curso") ) {
        e.target.parentElement.parentElement.remove();
        curso = e.target.parentElement.parentElement;
        cursoId = curso.querySelector("a").getAttribute("data-id");
    }
    eliminarCursoLocalStorage(cursoId);
}

//Elimina todos los cursos del carrito en el DOM
function vaciarCarrito() {
    //Forma lenta de limpiar el carrito de compra
    //listaCursos.innerHTML = "";

    //Forma rapida y la vez la recomendada
    while (listaCursos.firstChild) {
        listaCursos.removeChild(listaCursos.firstChild);
    }
    
    //Vaciar local Storage
    vaciarLocalStorage();
    
    return false;
}

//Almacena cursos en el carrito a local storage
function guardarCursoLocalStorage(curso) {
    let cursos;

    //Toma el valor de un arreglo con los datos del local storage
    cursos = obtenerCursosLocalStorage();

    //El curso seleccionado se agrega al arreglo 
    cursos.push(curso);
    localStorage.setItem( "cursos", JSON.stringify(cursos) );
}

//Comprueba que haya elementos en Local Storage
function obtenerCursosLocalStorage() {
    let cursosLS;

    //Comprueba si hay algo en Local Storage
    if (localStorage.getItem("cursos") === null) {
        cursosLS = [];
    } else {
        cursosLS = JSON.parse( localStorage.getItem("cursos") );
    }
    return cursosLS;
}

//Imprime los cursos de local Storage en el carrito
function LeerLocalStorage() {
    let cursosLS;

    cursosLS = obtenerCursosLocalStorage();

    cursosLS.forEach(function (curso) {
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
    });
}

//Eliminar curso de local Storage
function eliminarCursoLocalStorage(curso) {
    let cursosLS;

    //Obtenemos el arreglo de cursos
    cursosLS = obtenerCursosLocalStorage();

    //Iteramos comparando el ID del curso borrado con los del Local Storage
    cursosLS.forEach( function (cursoLS, index) { 
        if (cursoLS.id === curso) {
            cursosLS.splice(index, 1);
        }
     });
     
    //Añadimos el arreglo actual al local Storage
    localStorage.setItem( "cursos", JSON.stringify(cursosLS) );
}

//Elimina todos los cursos de Local Storage
function vaciarLocalStorage() { 
    localStorage.clear();
}