//Local Storage
localStorage.setItem("nombre", "Hector");

//Session Storage
sessionStorage.setItem("nombre", "Hector");

//Eliminar de Local Storage
// localStorage.removeItem("nombre");

const nombre = localStorage.getItem("nombre");
console.log(nombre);

localStorage.clear