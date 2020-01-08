// Eliminar de Local Storage
localStorage.clear();

let elemento;
elemento = document;
elemento = document.all;
elemento = document.all[10];
elemento = document.head;
elemento = document.body;
elemento = document.domain;
elemento = document.URL;
elemento = document.characterSet;
elemento = document.forms;
elemento = document.forms[0].id;

//Dos formas de nombrar las clases
elemento = document.forms[0].className;
elemento = document.forms[0].classList;

elemento = document.images;
elemento = document.images[2];
elemento = document.images[2].src;
elemento = document.images[2].getAttribute('src');

//Script (Cuando hay)
elemento = document.scripts

//Forma para transformar un html collection a un Arreglo
let imagenes = document.images;
let imagenesArr = Array.from(imagenes);

// console.log(elemento);
// console.log(imagenesArr);

imagenesArr.forEach(imagen => {
    console.log(imagen);
});