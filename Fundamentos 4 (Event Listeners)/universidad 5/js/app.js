// Trabajando con Delegation

document.body.addEventListener('click', eliminarElemento)

function eliminarElemento(e) {
    e.preventDefault();

    // console.log('Click!');
    // console.log(e.target.classList)

// Valida que realicen click en la clase que se pide    
/*
    if (e.target.classList.contains('borrar-curso')) {
        console.log('Si!');
    } else {
        console.log('No!');
    } 
*/

    if (e.target.classList.contains('borrar-curso')) {
        // console.log(e.target.parentElement);
        // console.log(e.target.parentElement.parentElement);
        console.log(e.target.parentElement.parentElement.remove() );
    }

    if (e.target.classList.contains('agregar-carrito')) {
        console.log('Curso agregado!');
    }
}

