// Local Storage and Session Storage

//Agregando a localStorage
localStorage.setItem('nombre', 'Hector');

//Obtener el valor de localStorage
let local = localStorage.getItem('nombre');
console.log(local);

//Eliminar de localStorage
localStorage.removeItem('nombre');

//Para eliminar todos los datos que se encuentran en localStorage
localStorage.clear();

//Agregando a sessionStorage
sessionStorage.setItem('nombre', 'Francisco');