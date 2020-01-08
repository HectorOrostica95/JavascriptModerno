// Reemplazar elementos con JavaScript
const nuevoEncabezado = document.createElement('h2');

//Agregar un ID 
nuevoEncabezado.id = 'encabezado'

//Agregar nuevo texto
nuevoEncabezado.appendChild(document.createTextNode('Los Mejores Cursos'))

//Elemento anterior (sera Reemplazado)
const anterior = document.querySelector('#encabezado');

//ELemento padre 
const elPadre = document.querySelector('#lista-cursos')

//Reemplazar 
elPadre.replaceChild(nuevoEncabezado,anterior);


console.log(nuevoEncabezado)
console.log(anterior)
console.log(elPadre)