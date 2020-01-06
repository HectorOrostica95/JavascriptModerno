
// const nombre    = prompt();
// console.log(`Bienvenido ${nombre}`);

// if (confirm('Eliminar?')) {
//     console.log('Eliminado');
// } else {
//     console.log('No paso!');
// }

let altura,
    anchura;

//Entrega las medidas del navegador
// altura = window.outerHeight;
// anchura = window.outerWidth;

//Entrega los datos que se encuentra 
//dentro de la ventana del navegador 
altura = window.innerHeight;
anchura = window.innerWidth;

console.log(altura);
console.log(anchura);

console.clear();

let ubicacion;

ubicacion = window.location;
ubicacion = window.location.port;
ubicacion = window.location.hostname;

//Se puede redireccionar a alguna persona de la siguiente manera 
// window.location.href = 'http://facebook.com'
console.log(ubicacion)
console.clear();

//De la siguiente forma se puede volver para atras por javascripts
// window.history.go(-2);

ubicacion = window.navigator;
ubicacion = window.navigator.appName;
ubicacion = window.navigator.appVersion;
ubicacion = window.navigator.userAgent;
ubicacion = window.navigator.language;
console.log(ubicacion)