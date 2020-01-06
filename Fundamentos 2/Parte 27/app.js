//Iteradores
const ciudades  = ['Londres', 'New York', 'Madrid', 'Paris'];
const ordenes   = new Set([123, 231, 131, 102]);
const datos     = new Map();

datos.set('nombre', 'Hector');
datos.set('profesion', 'Desarrollador Web');

console.log(ciudades);
console.log(ordenes);
console.log(datos);

console.clear();

// Entries iterador 
//Entries a las ciudades
for (let entrada of ciudades.entries()) {
    console.log(entrada);
}
console.clear();

//Entries para las Ordenes
for (let entrada of ordenes.entries()) {
    console.log(entrada);
}
console.clear();

//Entries para el MAP
for (let entrada of datos.entries()) {
    console.log(entrada);
}
console.clear();

//values para las ciudades
for (let entrada of ciudades.values()) {
    console.log(entrada);
}
console.clear();

//values para las Ordenes
for (let entrada of ordenes.values()) {
    console.log(entrada);
}
console.clear();

//values para el MAP
for (let entrada of datos.values()) {
    console.log(entrada);
}
console.clear();

//Keys para las ciudades
for (let entrada of ciudades.keys()) {
    console.log(entrada);
}
console.clear();

//Keys para las Ordenes
for (let entrada of ordenes.keys()) {
    console.log(entrada);
}
console.clear();

//Keys para el MAP
for (let entrada of datos.keys()) {
    console.log(entrada);
}
console.clear();

//Default para las ciudades
for (let entrada of ciudades) {
    console.log(entrada);
}
console.clear();

//Default para las Ordenes
for (let entrada of ordenes) {
    console.log(entrada);
}
console.clear();

//Default para el MAP
for (let entrada of datos) {
    console.log(entrada);
}


//Iteradores para un string

//Forma antigua
const mensaje = 'Aprendiendo JavaScript';
for (let i = 0; i < mensaje.length; i++) {
    console.log(mensaje[i]);    
}

console.clear()

//Forma nueva 
for (const letra of mensaje) {
    console.log(letra);
}
console.clear()

const enlaces = document.getElementsByTagName('a');
for (let enlace of enlaces) {
    // console.log(enlace);
    console.log(enlace.href);
}