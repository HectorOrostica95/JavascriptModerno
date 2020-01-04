/*
console.log('Hola');
prompt('Cuantos años tienes ?')
alert('Error')

function saludar() {
    let nombre = prompt('Cual es tu nombre?')
    console.log('Hola ' + nombre);
}

saludar();

function saludar2(nombre) {
    console.log('Hola ' + nombre);
}

saludar2('Juan');
saludar2('Francisco');

function sumar(a,b) {
    console.log(a + b);
}

sumar(5,4);
sumar(1,4);

// console.clear()

function sumar2(a,b) {
    return a + b;
}

let suma;
suma = sumar2(8,4);
console.log(suma);

function saludar(nombre) {
    if (typeof nombre === 'undefined') {
        nombre = 'Visitante';
    }

    return `Hola ${nombre}`;
}

let saludo
saludo = saludar();
// saludo = saludar('Hector');
console.log(saludo)

*/

//Forma nueva (funcion declaration)
function saludar(nombre = 'Visitante') {
    return `Hola ${nombre}`;
}

let saludo
saludo = saludar();
saludo = saludar('Hector');
console.log(saludo)

// funcion expression 
const suma = function (a = 0, b = 0) {
    return a + b;
}

console.log( suma (1,2) );
console.log( suma (9) );

console.clear()

const saludar2 = function (nombre = 'Visitante') {
    return `Hola ${nombre}`;
}

console.log( saludar2('Hector') );
console.log( saludar2() );

const saludar3 = function (nombre = 'Visitante', edad = 20, profesion = 'Desarrollador Web') {
    return `Hola, tienes ${edad}, profesión ${profesion} y te llamas ${nombre}`;
}

console.log(saludar3('Hector'));
