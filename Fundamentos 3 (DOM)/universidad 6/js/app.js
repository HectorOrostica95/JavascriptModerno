// Creando enlaces con DOM

const enlace = document.createElement('a');

//Agregar una clase 
enlace.className = 'enlace'

//Añadir ID
enlace.id = 'nuevo-id'

//Atriburo de href 
enlace.setAttribute('href', '#');

//Añadir texto
enlace.textContent = 'Nuevo Enlace'
// enlace.appendChild(document.createTextNode('Nuevo Enlace'));

// Agregarlo al HTML 
document.querySelector('#secundaria').appendChild(enlace);

console.log(enlace);
