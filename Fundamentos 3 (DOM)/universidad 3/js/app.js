// Uso del querySelector
// El signo de gato es para un ID mientras que un punto es para 
// las clases que se declaran

const encabezado = document.querySelector('#encabezado')

encabezado.style.background = '#333';
encabezado.style.color = '#fff'
encabezado.style.padding = '20px'

encabezado.textContent = 'Los mejores Cursos'


// La diferencia entre querySelector y getElementById es 
// es que en querySelector se puede seleccionar una clase y un id, 
// mientras que para getElementById solo permite seleccionar un ID

console.log(encabezado);


const encabezados = document.querySelector('.card img')
console.log(encabezados);

console.clear();

let enlace;
enlace = document.querySelector('#principal a:first-child')
enlace = document.querySelector('#principal a:last-child')

enlace = document.querySelector('#principal a:nth-child(3)')


 console.log(enlace)