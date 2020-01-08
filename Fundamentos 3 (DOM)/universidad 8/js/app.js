const enlaces = document.querySelectorAll('.enlace');
const navegacion = document.querySelector('#principal');

/* Para eliminar un elemento del body de HTML se 
debe realizar de la siguiente forma   */
// enlaces[0].remove()

navegacion.removeChild(enlaces[2])

console.log(enlaces);
console.log(navegacion);

console.clear();

// Para eliminar un atributo en 
// javascript se realiza de la siguiente forma
const primerLi = document.querySelector('.enlace')
let elemento;

//Obtener la clase de CSS
elemento = primerLi.className;
elemento = primerLi.classList;

//Añadiendo una clase 
elemento = primerLi.classList.add('nueva-clase');
elemento = primerLi.classList;
console.log(elemento);

//Eliminando una clase 
elemento = primerLi.classList.remove('nueva-clase');
elemento = primerLi.classList;
console.log(elemento);

//Leyendo atributos
elemento = primerLi.getAttribute('href');
primerLi.setAttribute('href', 'http://facebook.com');
primerLi.setAttribute('data-id', 20);
elemento = primerLi;
console.log(elemento);

console.clear();

//Para validar si existe el atributo 
//indicado se debe realizar lo siguiente 
elemento = primerLi.hasAttribute('data-id');
console.log(elemento);
