//Variables 
const carrito          = document.getElementById('carrito');
const cursos           = document.getElementById('lista-cursos');
const listaCursos      = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');


//Listeners
cargarEventListeners();

function cargarEventListeners() {
    //Dispara cuando se presiona "Agregar Carrito"
    cursos.addEventListener('click', comprarCurso);

    //Cuando se elimina un curso en el carrito
    carrito.addEventListener('click', eliminarCurso);

    //Cuando el usuario realiza click en el boton vaciar carrito
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);

    //Al cargar el documento, mostrar LocalStorage
    document.addEventListener('DOMContentLoaded', leerLocalStorage)




}

//Funciones
//Funcion que añade cuando el curso al carrito 
function comprarCurso(e) {
    e.preventDefault();
    
    // Delegation para agregar carrito
    if (e.target.classList.contains('agregar-carrito')){
        const curso = e.target.parentElement.parentElement;
        // console.log(curso);
        leerDatosCurso(curso);        
    }
}

//Lee los datos del curso
function leerDatosCurso(curso) {
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id:     curso.querySelector('a').getAttribute('data-id')
    }

    insertarCarrito(infoCurso);
    

    // console.log(infoCurso);
}

//Muestra el curso seleccionado en el carrito 
function insertarCarrito(curso) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td> <img src="${curso.imagen}" width=100> </td>
        <td> ${curso.titulo} </td>
        <td> ${curso.precio} </td>
        <td> 
            <a href="#" class="borrar-curso" data-id="${curso.id}"> X </a>
        </td>
    `
    listaCursos.appendChild(row);
    guardarCursoLocalStorage(curso);
}

//Elimina el curso del carrito 
function eliminarCurso(e) {
    e.preventDefault();

    let curso, cursoId;
    if (e.target.classList.contains('borrar-curso')) {
        // console.log(e.target.parentElement.parentElement);
        e.target.parentElement.parentElement.remove();            
        curso = e.target.parentElement.parentElement;
        cursoId = curso.querySelector('a').getAttribute('data-id');

        // console.log(cursoId);
    }    

    eliminarCursoLocalStorage(cursoId);
}

//Elimina los cursos del carrito en el DOM
function vaciarCarrito() {
    //Primera forma
    // listaCursos.innerHTML = '';

    //Segunda forma(Recomendada)
    while (listaCursos.firstChild) {
        listaCursos.removeChild(listaCursos.firstChild);
    }

    //Vaciar localStorage
    vaciarLocalStorage();

    return false;
}

//Almacena cursos en el carrito a Local Storage
function guardarCursoLocalStorage(curso) {
    let cursos;

    //Toma le valor de un arreglo con los datos del LS o vacio 
    cursos = obtenerCursosLocalStorage();

    //El curso seleccionado se agrega al arreglo
    cursos.push(curso);

    localStorage.setItem('cursos', JSON.stringify(cursos));
}

// Comprueba que haya elemento en local Storage
function obtenerCursosLocalStorage() {
    let cursosLS;
    
    //Comprobamos si hay algo en localStorage
    if (localStorage.getItem('cursos') === null) {
        cursosLS = [];
    } else {
        cursosLS = JSON.parse( localStorage.getItem('cursos') );
    }

    return cursosLS
}

//Imprime los cursos de Local Storage en el carrito
function leerLocalStorage() {
    let cursosLS;
    cursosLS= obtenerCursosLocalStorage();

    cursosLS.forEach(curso => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td> <img src="${curso.imagen}" width=100> </td>
            <td> ${curso.titulo} </td>
            <td> ${curso.precio} </td>
            <td> 
                <a href="#" class="borrar-curso" data-id="${curso.id}"> X </a>
            </td>
        `
        listaCursos.appendChild(row);
    });

    // console.log('Cargue los datos');
}

//Elimina el curso por el ID del LocalStorage
function eliminarCursoLocalStorage(curso) {
    let cursosLS;

    //Obtenemos el arreglo de cursos
    cursosLS= obtenerCursosLocalStorage();

    //Iteramos comparando el Id del curso borrado con los del LS 
    cursosLS.forEach((cursoLS, index) => {
        if (cursoLS.id === curso) {
            cursosLS.splice(index, 1)
        }
        // console.log(curso.id);
    });

    //Añadimos el arreglo actual a LS
    localStorage.setItem('cursos', JSON.stringify(cursosLS));
}

//Elimina todos los cursos del local storage
function vaciarLocalStorage() {
    localStorage.clear();
}