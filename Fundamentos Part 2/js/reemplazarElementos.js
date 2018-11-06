//Reemplazar elementos
const nuevoEncabezado = document.createElement("h2");

//Agregar un id
nuevoEncabezado.id = "Encabezado";

//Agregar nuevo texto
nuevoEncabezado.appendChild(document.createTextNode("Los Mejores Cursos"));

//El elemento anterior sera reemplazado por 
const anterior = document.querySelector("#encabezado");

//Viendo el elemento padre
const elPadre = document.querySelector("#lista-cursos");

//Reemplazar
elPadre.replaceChild(nuevoEncabezado, anterior);

console.log(nuevoEncabezado);
console.log(anterior);
console.log(anterior.parentElement);

//Esto continua en addRemoveElementos