//querySelector querySelectorAll
let enlaces = document.getElementsByClassName('enlace');

enlaces = enlaces[1];
// let enlaces = document.getElementsByClassName('enlace')[3];

//CSS
enlaces.style.backgound = '#333';
// enlaces.textContent = 'Nuevo enlace';
console.log(enlaces);

const listaEnlace = document.querySelector('ul')
console.log(listaEnlace)
console.clear();

let listaEnlaces = document.querySelector('#principal').getElementsByClassName('enlace');
console.log(listaEnlaces)

const links = document.getElementsByTagName('a');

links[18].style.color = 'red';
// links[18].textContent = 'Nuevo enlace'

console.log(links)
console.clear();

//La diferencia entre querySelector y querySelectorAlles 
//que el ultimo devuelve una lista con los que encuentra

const enlace = document.querySelectorAll('#principal .enlace');
enlace[1].style.backgound = 'gray';
enlace[1].textContent = 'Nuevo enlace'
console.log(enlace);
console.clear();

//A continuacion se seleccionara todos los enlaces que son impares
const enlac = document.querySelectorAll('#principal a:nth-child(odd)');

enlac.forEach(function(impares) {
    impares.style.backgound= 'red';
    impares.style.color = 'White';
    
});

console.log(enlac)






