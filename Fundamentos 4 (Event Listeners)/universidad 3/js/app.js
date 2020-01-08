// Eventos para los input 
const busqueda = document.querySelector('#buscador');

// busqueda.addEventListener('keydown', obtenerEvento);
// busqueda.addEventListener('keyup', obtenerEvento);
// busqueda.addEventListener('keypress', obtenerEvento);
// busqueda.addEventListener('focus', obtenerEvento);

//El siguiente evento es utilizado para cuando el 
// usuario rellena un cuadro de texto y este da 
// click afuera se puede validar cuantos caracteres ingreso 
// busqueda.addEventListener('blur', obtenerEvento);

//Para cuando el usuario realiza la accion de cortar
// busqueda.addEventListener('cut', obtenerEvento);

//Para cuando el usuario realiza la accion de copiar
// busqueda.addEventListener('copy', obtenerEvento);

//Para cuando el usuario realiza la accion de pegar
// busqueda.addEventListener('paste', obtenerEvento);


// busqueda.addEventListener('input', obtenerEvento);
busqueda.addEventListener('change', obtenerEvento);




function obtenerEvento(e) {
    // console.log(busqueda.value);
    document.querySelector('#encabezado').innerHTML = busqueda.value;
    console.log(`EVENTO: ${e.type}`)
}