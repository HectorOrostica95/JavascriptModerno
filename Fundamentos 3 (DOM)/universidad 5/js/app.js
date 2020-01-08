const navegacion = document.querySelector('#principal');

console.log(navegacion);
console.log(navegacion.childNodes);
console.log(navegacion.children);
console.log(navegacion.children[0].nodeType);


// Tipos de nodos
// 1  = Elementos
// 2  = Atributos
// 3  = Text Node
// 8  = Comentarios 
// 9  = Documentos 
// 10 = Doctype

console.clear();

// console.log(navegacion.children[0].textContent = 'Nuevo Enlace');
console.clear();

const barra = document.querySelector('.barra');
console.log(barra);
console.log(barra.children);
console.log(barra.children[0].children[0].children);

console.clear();

const cursos = document.querySelectorAll('.card');
console.log(cursos);
console.log(cursos[0].lastElementChild);
console.log(cursos[0].firstElementChild);
//Para contar los elementos que 
// hay se debe usar lo siguiente
console.log(cursos[0].childElementCount);

console.clear();

const enlaces = document.querySelectorAll('.enlace');
console.log(enlaces);
console.log(enlaces[0]);

//Existen dos maneras de ir de adentro hacia afuera 
console.log(enlaces[0].parentNode);
console.log(enlaces[0].parentElement);

//La mas utilizada es parentElement
console.log(enlaces[0].parentElement.parentElement);
console.log(enlaces[0].parentElement.parentElement.parentElement);

console.clear();

const curso = document.querySelectorAll('.card');
console.log(curso);
console.log(curso[0]);
console.log(curso[0].parentElement);
console.log(curso[0].parentElement.parentElement);
console.log(curso[0].parentElement.parentElement.parentElement);
console.log(curso[0].parentElement.parentElement.parentElement.children);
console.log(curso[0].parentElement.parentElement.parentElement.children[0].textContent = 'Hola desde traversing');

console.clear();

const enlace = document.querySelectorAll('.enlace');
console.log(enlace);
console.log(enlace[4]);
console.log(enlace[4].textContent);
console.log(enlace[4].previousElementSibling);
console.log(enlace[4].previousElementSibling.textContent);
console.clear();

console.log(enlace[0]);
console.log(enlace[0].nextElementSibling);
console.log(enlace[0].nextElementSibling.nextElementSibling);
console.log(enlace[0].nextElementSibling.nextElementSibling.parentElement);
console.log(enlace[0].nextElementSibling.nextElementSibling.parentElement.children);




