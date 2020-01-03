// Como cambiar de String a numero

const numero1 = "50";
const numero2 = 10;
const numero3 = "tres";

console.log("Java"+'Script');

console.clear();

console.log(numero1 + numero2);
console.log(Number(numero1) + numero2);     //Convierte el string a numero
console.log(parseInt(numero1) + numero2);   //Convierte el string a numero

console.log(numero1 - numero2);
console.clear();

console.log(typeof numero1);
console.log(typeof parseInt (numero1));

console.clear();

let dato;

dato = Number("20");
console.log(dato);

dato = Number('20.873');
console.log(dato);

dato = Number(true);
console.log(dato);

dato = Number(false);
console.log(dato);

dato = Number(null);
console.log(dato);

dato = Number(undefined);
console.log(dato);

dato = Number('Hola mundo');
console.log(dato);

dato = Number([1,2,3,4,5]);
console.log(dato);

console.clear();

dato = parseInt(100);
console.log(dato);

dato = parseInt(100.2030);
console.log(dato);

dato = parseFloat(100);
console.log(dato);

dato = parseFloat(100.2030);
console.log(dato);

console.clear();

dato = 19201834.9187273213
console.log(dato.toFixed(6));
console.log(typeof (dato));