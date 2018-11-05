// const enlaces = document.querySelectorAll(".enlace");
// const navegacion = document.querySelector("#principal");

// enlaces[0].remove();
// navegacion.removeChild(enlaces[0]);

// console.log(enlaces);
// console.log(navegacion);

const primerLi = document.querySelector(".enlace");
let elemento;

// elemento = primerLi.className;
// elemento = primerLi.classList.add("nueva-clase");
// elemento = primerLi.classList.remove("nueva-clase");
// elemento = primerLi.classList;

// console.log(primerLi);
// console.log(elemento);

//Leer atributos 
elemento = primerLi.getAttribute("href");
primerLi.setAttribute("href", "www.facebook.com");
primerLi.setAttribute("data-id", 20);
elemento = primerLi.hasAttribute("data-id");
primerLi.removeAttribute("data-id");

elemento = primerLi;
console.log(elemento);

//Esto continua en eventListener