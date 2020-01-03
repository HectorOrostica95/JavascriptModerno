console.log('Hola ');

// let nombre = prompt('¿Cual es tu nombre?');
// let nombre = prompt('¿Cual es tu edad?');

// document.getElementById('app').innerHTML = `Bienvenido ${nombre} de ${edad} años`;


// let nombre = prompt('Cual es tu nombre?');
// let edad = prompt('Cual es tu edad?');

// document.getElementById('app').innerHTML = `Bienvenido ${nombre} de ${edad} años`

// prompt('Cual es tu nombre?');

// alert('Error');

// confirm('Deseas borrar ese elemento?')


// console.log("Enviado a la consola");
// console.log(2 + 2);
// console.log(true);
// console.log('ID: 20');



//Segunda parte

/*
var carrito = "libro",
carrito1 = "libro2";

console.log(carrito);
console.log(carrito1);

//mas de una palabra

function hola_mundo(){
    console.log('Hola perro');
}

hola_mundo();

var primerNombre = 'Hector';    //camelcase
var primer_nombre = 'Hector';   //underscore
var PrimerNombre = 'Hector';    //pascal case

console.log(primerNombre);
*/

//Tercera parte
/*
let nombre;

nombre = 'Hector';

console.log(nombre);

const producto = "libro";

console.log(producto);

let mensaje;

mensaje = 'Y entonces dije "Buen Curso!!!!"';

console.log(mensaje);

mensaje;

mensaje = 20;

console.log(mensaje);

mensaje = 'JAVA' + 'SCRIPT';

console.log(mensaje);

let aprendiendo = 'Aprendiendo',
tecnologia = 'Javascript'

console.log(`${aprendiendo} ${tecnologia}`);

console.log(tecnologia.length);
console.log(tecnologia.concat(' es genial!!'));
*/

//Cuarta parte

/*
let mensaje;

mensaje = "Aprendiendo Javascript, CSS, HTML para ser Front-End";

console.log(mensaje);

console.log(mensaje.indexOf('Javascript'));

//Comienza de izqueda a derecha
console.log(mensaje.substring(0,11));

//Comienza de derecha a izquerda con el numero negativo
console.log(mensaje.slice(-3));


console.log(mensaje.split(' '));

console.log(mensaje.replace('CSS', 'PHP'));

console.log(mensaje.includes('PHP'));

let tecnologia = 'Javascript ';

console.log(tecnologia.repeat(10));
*/

// Quinta parte
/*
const num1 = 30,
num2 = 20,
    num3 = 20.20,
    num4 = .1020,
    num5 = -3;

//console.log(num1);

let resultado;
//Suma
resultado = num1 + num2;
//Resta
resultado = num1 - num2;
//Multiplicar
resultado = num1 * num2;
//Dividir
resultado = num1 / num2;
//Residuo o modulo
resultado = num1 % num2;
//PI
resultado = Math.PI
//Redondeo
resultado = Math.round(2.4);
//Redondear siempre hacia arriba
resultado = Math.ceil(2.4);
//Redondear siempre hacia abajo
resultado = Math.floor(2.99);
//Raiz cuadrada
resultado = Math.sqrt(144);
//Absoluto
resultado = Math.abs(num5);
//Potencia
resultado = Math.pow(8,3);
//minimo
resultado = Math.min(3,8,1,4,7,8,2,4);
//Maximo
resultado = Math.max(3,8,1,4,7,8,2,4);
//Aleatoreo
resultado = Math.random();

resultado = 10 + 20 - 5;
resultado = 10 + 20 * 5;
resultado = (10 + 20) * 5;
resultado =  (10 + 20 + 20 + 10 + 40) *.20;

console.log(resultado);

let puntaje;

puntaje = 10;

console.log(puntaje++);

console.log(puntaje);

puntaje = 10;

console.log(++puntaje);

console.log(puntaje);

puntaje = 10;

console.log(puntaje--);

console.log(puntaje);

puntaje = 10;

console.log(--puntaje);

console.log(puntaje);

puntaje = 10;
puntaje += 5;

console.log(puntaje);

puntaje = 10;
puntaje -= 5;

console.log(puntaje);
*/

//Sexta parte
/*
let valor;

valor = "Cadena de texto";
valor = 20;
valor = true;
valor = null;
valor = undefined;
valor = {
    nombre: 'Hector'
};
valor = 20;
valor = 20.20;
valor = -30;
valor = "20";


//Booleanos
valor = false;

//null
valor = null;

//Symbol
valor = Symbol('Simbolo');

//Arreglo 
valor = [1,2,3,4,5,6]

//objetos 
valor = {
    nombre: 'Hector Orostica',
    profesion: 'Desarrollador Web'
}

//Fechas 
valor = new Date();

console.log(typeof(valor));
*/

//Septima parte

/*
const numero1 = 20;
const numero2 = 50;
const numero3 = '20';

//console.log(numero1 > numero2);
//console.log(numero1 < numero2);

//Comparador de Igual
//console.log(20 == '20');
//console.log(numero1 === numero3);

console.log(2!=3);
//Javascript evalua las letras de manera de que la letra "A" es la que menor rango tiene y la "z" mayor rango      
//console.log( 'hola' == ' hola');

console.log('a' < 'Z');
*/

//Octava parte 

/*
const numero1 = "50",
numero2 = 10,
numero3 = 'tres';

//console.log("Java" + "Script");

//console.log( numero1 + numero2);
//console.log( Number(numero1) + numero2);

//console.log( numero1 - numero2);

let dato;
dato = Number("20");
dato = Number("20.10931");
dato = Number(true);
dato = Number(false);
dato = Number(null);
dato = Number(undefined);
dato = Number("Hola Mundo");
dato = Number([1,2,3,4,5]);

//PaeseFloat y ParseInt
dato = parseInt('100');
dato = parseFloat('100');
dato = parseFloat('100.2030');
dato = parseInt('100.2030');

console.log(dato);

//toFixed
dato = 18929173.89239742;

console.log(dato.toFixed(3));
console.log(parseFloat(dato).toFixed(2));

let codigoPostal;

codigoPostal = 90210;

codigoPostal = String(codigoPostal);

console.log(codigoPostal.length);
console.log(typeof(codigoPostal));

let dato
dato = '4' + '4';

//Boleanos
dato = true;
dato = false;

dato = String(dato);

// de Arreglo a String

dato = [1,2,3];
dato = String(dato)

// toString
dato = 20;
dato = true;
dato = [1,2,3,4];
//dato = null;
//dato = undefined;
dato = dato.toString();

console.log(dato);
console.log(dato.length);
console.log(typeof(dato));
*/

//novena parte

// corresponden a los template antiguos
/*
const producto1 = "Pizza",
precio1 = 30
producto2 = "Hamburguesas",
precio2 = 40;

let html;

html = '<ul>'+
'<li>Orden: '   + producto1 + '</li>' +
'<li>Precio: '    + precio1 + '</li>' +
'<li>Orden: '   + producto2 + '</li>' +
'<li>Precio: '    + precio2 + '</li>' +
'<li>Total: '    + (precio1 + precio2) + '</li>' +
'</ul>';

document.getElementById("app").innerHTML = html;

console.log(html);
// corresponden a los template nuevos usados con la tecnologia de ahora
const producto1 = "Pizza",
precio1 = 30
producto2 = "Hamburguesas",
precio2 = 40;

let html;
html =  `<ul>            
<li>Orden: ${producto1}</li>
<li>Precio: ${precio1}</li>
<li>Orden: ${producto2}</li>
<li>Precio: ${precio2}</li>
<li>Total: ${total(precio1, precio2)}</li>
</ul>`;

function total(precio1, precio2){
    return precio1 + precio2;
}

document.getElementById("app").innerHTML = html;
*/

// decima parte 

/*
const numeros = [10, 20, 30, 40, 50, 60];
console.log(numeros);

Arreglo de String (Metodo alterno)

const meses = new Array("Enero", "Febrero", "Marzo", "Abril");
console.log(meses);
console.log(meses.length);

console.log(meses[2]);

meses[4] = "Mayo";
meses.push("Junio");
//console.log(meses);

//Encontrar un elemento en el arreglo

//console.log("El mes de Abril se encuentra en la posicion n°: " + meses.indexOf('Abril'));

//Añadir un elemento al inicio del arreglo
meses.unshift("Mes 0");

//Eliminar un elemento del final
meses.pop();

//Eliminar un elemento del inicio
meses.shift();

//Eliminar un elemento de cualquier posicion
meses.splice(2,1);

// revertir un arreglo
meses.reverse();

//console.log(meses);

// Unir arreglos 
let arreglo1 = [1,2,3],
arreglo2 = [7,8,9];

//console.log(arreglo1.concat(arreglo2));

const frutas = ["Platano", "Manzana", "Fresa", "Naranja"];
//Forma de ordenar letras en Javascritp
frutas.sort();

//console.log(frutas);

arreglo1 = [1,4,5,30,23,72,12,94,25,6,8,9];
//arreglo1.sort();
//Forma de ordenar un arreglo de numeros en Javascript

arreglo1.sort(function (x, y){
    return x - y;
} );

console.log(arreglo1);

arreglo1.sort(function (x, y){
    return y - x;
} );

console.log(arreglo1);
let numeros = [1,2,3];
numeros[0]= 4;
numeros.push(5);

numeros = ["Enero", "Febrero"]
console.log(numeros);

//let nombre = 'Juan';
//console.log(Array.isArray(nombre));

//Arreglo mezclado
//const mezclado = ['Hola', 20 , true, null, false, undefined];
//console.log(mezclado);
*/

//Decimo primera parte

/*
//Creando objeto 
const persona = {
    nombre: "Hector",
    apellido: "Orostica",
    profesion: "Desarrollador Web",
    email: "correo@correo.com",
    edad: 23,
    musica: ["Flock", "Rock", "Grunge"],
    hogar: {
        ciudad: "Santiago",
        pais: "Chile"
    },
    nacimiento: function(){
        return new Date().getFullYear() - this.edad
    }
}
console.log(persona);
console.log(persona.hogar.pais);
console.log(persona.nacimiento());

persona.musica.push("alternativo");
const autos = [
    {modelo: "Mustang", motor: 6.2},
    {modelo: "Camaro", motor: 6.1},
    {modelo: "Challenger", motor: 6.3}
];

//console.log(autos);
//console.log(autos[0].modelo);
//console.log(autos.length);

//for (let i = 0; i < autos.length; i++) {
    //    console.log(autos[i]);
    //}
    autos[0].modelo = "Audi";
    
    for (var j = 0; j < autos.length; j++) {
        console.log(`${autos[j].modelo} ${autos[j].motor}`);
    }
*/

//decimo segunda partee
/*
function saludar() {  
    console.log("Hola que tal Hector");
}

saludar();

function saludar(nombre) {
    console.log("Hola " + nombre);
}

saludar("Hector");
saludar("Matias");

function sumar(a,b) {
    return a + b;
}

let suma;

suma = sumar(1,2);
suma = sumar(3,4);
suma = sumar(5,2);

console.log(suma);
function saludar(nombre = "Visitante") {
    return "Hola como estas " + nombre;
}

let saludo

saludo = saludar("Hector");

console.log(saludo);

const suma = function (a = 0, b = 0) {
    return a + b;
}

console.log(suma(1,2));
console.log(suma(5));

//funciones IIFE

(function () {
    console.log("Creando un IIFE");    
})();

(function (tecnologia) {
    console.log(`Aprendiendo ${tecnologia}`);
})("Javascript");

//Metodos de propiedad
//cuando una funcion se ponen dentro de un objeto y al crear este objeto las funciones que se crean dentro de este objeto se les conoce como metodos

const musica = {
    reproducir: function () {
        console.log("Reproduciendo la musica");
    },
    pausar: function () {
        console.log("Pausando la  musica");
    }
}

//Los metodos se pueden crear afuera del objeto 
musica.borrar = function (id) {
    console.log("Borrando la cancion con el ID: " + id);
}

musica.reproducir();
musica.pausar();
musica.borrar(10);

//El finally siempre se ejecutara sea correcta la ejecucion o erronea
try {
    algo();
} catch (e) {
    console.log(e);
} finally {
    console.log("Don cuea");    
}

function obtenerClientes() {
    console.log("Descargando...");
    setTimeout(function () {  
        console.log("completo");
    }, 3000);
}

//Al realizar un llamado a una funcion la cual no ha sido declarada esta deja de ejecutar el javascritp

//obtenerClientes();
*/

//Decimo tercera

/*
//Objeto de fecha

//Fecha en especifico Dia mes Año
let navidad2017 = new Date('2017, 12, 25');
console.log(navidad2017);

const diaHoy = new Date();
console.log(diaHoy);

let valor;

valor = diaHoy.getMonth();
valor = diaHoy.getDate();
valor = diaHoy.getDay();
valor = diaHoy.getFullYear();
valor = diaHoy.getMinutes();
valor = diaHoy.getHours();

//La siguiente funcion corresponde a todos los milisegundos desde 1970
valor = diaHoy.getTime();

valor = diaHoy.getFullYear();
valor = diaHoy.setFullYear(2016);
valor = diaHoy.getFullYear();


console.log(valor);
*/

//Decimo cuarta
/*

const edad = 19;
if (edad >= 18) {
    console.log("Si puedes entrar al sitio");
}else{
    console.log("No puedes entrar al sitio");
}

//Operador estricto
if (edad === 18) {
    console.log("Si puedes entrar al sitio");
}else{
    console.log("No puedes entrar al sitio");
}

//Comprobar que una variable tiene un valor 
const puntaje =  1000;

if (typeof(puntaje) != "undefined") {
    console.log("El puntaje fue de: " + puntaje);
} else {
    console.log("No hay puntaje");
}

let efectivo = 500;
let totalCarrito = 300;

if (efectivo > totalCarrito) {
    console.log("Pago Correcto");    
}else {
    console.log("Fondos insuficientes");
}

let hora = 22;

if (hora > 0 && hora <= 10) {
    console.log("Buenos Dias!");
} else if (hora > 10 && hora <= 18) {
    console.log("Buenas Tardes!");
} else if (hora > 18 && hora <= 24) {
    console.log("Buenas Noches!");
} else {
    console.log("Hora no valida");
}

let puntaje = 100;

if (puntaje < 150) {
    console.log("Puntaje menor 150");
} else if (puntaje < 200) {
    console.log("Puntaje menor 200");
}

let efectivo = 300,
credito = 300,
disponible = efectivo + credito,
totalCarrito = 500;

if(totalCarrito < efectivo || totalCarrito < credito || totalCarrito < disponible) {
    console.log("Puedo pagar!");
} else {
    console.log("No puedo pagar!");
}

//Ternario

const logeado = true;

console.log(logeado === true ? "Si se logeo":"No se logeo");

//Switch

const metodoPago = "efectivo";

switch (metodoPago) {
    case "efectivo":
    console.log("El usuario pago con " + metodoPago);
    break;
    case "cheque":
    console.log("El usuario pago con " + metodoPago);
    break;
    case "tarjeta":
    console.log("El usuario pago con " + metodoPago);
    break;
    default:
    console.log("Metodo de pago no soportado");
    break;    
}

let mes;
switch (new Date().getMonth()) {
    case 0:
    mes = "Enero";
    break;
    case 1:
    mes = "Febrero";
    break;
    case 2:
    mes = "Marzo";
    break;
    case 3:
    mes = "Abril";
    break;
    case 4:
    mes = "Mayo";
    break;
    case 5:
    mes = "Junio";
    break;
    case 6:
    mes = "Julio";
    break;
    case 7:
    mes = "Agosto";
    break;
    case 8:
    mes = "Septiembre";
    break;
    case 9:
    mes = "Octubre";
    break;
    case 10:
    mes = "Noviembre";
    break;
    case 11:
    mes = "Diciembre";
    break;
}

console.log("Este mes es: " + mes);
*/

//Decimo quinto 
/*
//Opcion 1
for (var i = 0; i < 10; i++) {
    if (i== 5) {
        console.log("Voy en el numero 5")
    } else {
        console.log("Numero: " + i);
    }
}

//Opcion 2
for (var i = 0; i < 10; i++) {
    if (i== 5) {
        console.log("Voy en el numero 5")
        continue;
    }
    console.log("Numero: " + i);
}

//Opcion 3
for (var i = 0; i < 10; i++) {
    if (i== 5) {
        console.log("Voy en el numero 5")
        break;
    }
    console.log("Numero: " + i);
}
for (var i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        console.log("El numero " + i + " es par");
    }else {
        console.log("El numero " + i + " es impar");
    }
}

const producto = ["Camisa", "Boleto", "Guitarra", "Disco"];

for (var i = 0; i < producto.length; i++) {
    console.log("Tu producto " + producto[i] + " fue agregado");
}

let  i = 0;
while (i < 10) {
    console.log("Numero " + i);
    i++;
}
const musica = ["Cancion 1", "Cancion 2", "Cancion 3"];

let  i = 0;
while (i < musica.length) {
    console.log("Reproduciendo la " + musica[i]);
    i++;
}

let i = 10000;
do {
    console.log("Numero:" + i);
    i++
} while (i < 10);

const pendentes = ["Tarea", "Comer", "Proyecto", "Aprender Javascript"];

for (var i = 0; i < pendentes.length; i++) {
    //console.log(pendentes[i]);
}

pendentes.forEach( function(pendente) {
    console.log(pendente);
});

//Map
const carrito = [
    {id: 1, producto: "Libro"},
    {id: 2, producto: "Camisa"},
    {id: 3, producto: "Guitarra"},
    {id: 4, producto: "Disco"}
];

const nombreProducto = carrito.map(function (carrito){
    return carrito.producto;
});

console.log(carrito);

const automovil = {
    modelo: "Camaro",
    motor: 4.2,
    anio: 1969,
    marca: "Chevrolet"
}

for (var auto in automovil) {
    console.log(auto + " : " + automovil[auto]);
}

console.log(automovil);

const ciudades = ["Londres", "New York", "Madrid", "Paris"];
const ordenes = new Set([123, 231, 131, 102]);
const datos = new Map();

datos.set("nombre", "Hector");
datos.set("profesion", "Desarrollador Web");

console.log(ciudades);
console.log(ordenes);
console.log(datos);

//entris para las Ciudades
for (let entrada of ciudades.entries()) {
    console.log(entrada);   
}

//entris para las Ordenes
for (let entrada of ordenes.entries()) {
    console.log(entrada);   
}

//entris para las Datos
for (let entrada of datos.entries()) {
    console.log(entrada);   
}

//values para las Ciudades
for (let entrada of ciudades) {
    console.log(entrada);   
}

//values para las Ordenes
for (let entrada of ordenes.values()) {
    console.log(entrada);   
}

//values para las Datos
for (let entrada of datos.values()) {
    console.log(entrada);   
}

//Keys para las Ciudades
for (let entrada of ciudades.keys()){
    console.log(entrada);   
}

//Keys para las Ordenes
for (let entrada of ordenes.keys()){
    console.log(entrada);   
}

//Keys para las Datos
for (let entrada of datos.keys()){
    console.log(entrada);   
}
const mensaje = "Aprendiendo Javascript";

for (let i = 0; i < mensaje.length; i++) {
    console.log(mensaje[i]);
}

for (let letra of mensaje) {
    console.log(letra);
}

const enlaces = document.getElementsByTagName("a");

for (let enlace of enlaces) {
    console.log(enlace);
}

for (let enlace of enlaces) {
    console.log(enlace.href);
}
  */
//decimo sexta 
/*
  
// let nombre = prompt();
// console.log("Bienvenido " + nombre);

if (confirm("Eliminar?")) {
    console.log("Eliminado");
} else {
    console.log("Nada paso!"); 
}
let altura,
anchura;

altura = window.outerHeight;
anchura = window.outerWidth;

console.log(altura);
console.log(anchura);

altura = window.innerHeight;
anchura = window.innerWidth;

console.log(altura);
console.log(anchura);

//Ubicacion

let ubicacion;

ubicacion = window.location

console.log(ubicacion);

//Forma de redireccionar

ubicacion = window.location
window.location.href = "http://facebook.com"

//revisando el historial
*/