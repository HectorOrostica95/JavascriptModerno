// Uso del getElementById

let elemento;

elemento = document.getElementById('hero');
elemento = document.getElementById('header').className;

// elemento = elemento.id

console.log(elemento);
console.clear();


let encabezado;

encabezado = document.getElementById('encabezado');
console.log(encabezado)

//Se puede realizar de los siguientes dos metodos
encabezado = document.getElementById('encabezado').textContent;
console.log(encabezado);
encabezado = document.getElementById('encabezado').innerText;
console.log(encabezado);

console.clear();

encabezado = document.getElementById('encabezado');
encabezado.style.background = '#333';
encabezado.style.color = '#fff';
encabezado.style.padding = '20px';

//Se puede realizar de las siguientes dos maneras 
encabezado.textContent = 'Los mejores Cursos';
encabezado.innerText = 'Los mejores Cursos';

console.log(encabezado);
console.log(encabezado.innerText);
