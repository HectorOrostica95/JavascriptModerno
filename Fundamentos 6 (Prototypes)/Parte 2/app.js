
//String
const nombre1 = 'Hector';
const nombre2 = new String('Hector');

console.log( nombre1);
console.log( nombre2);

if (nombre1 == nombre2) {
    console.log('Si, son iguales');
} else {
    console.log('No, son diferentes');
}

if (nombre1 === nombre2) {
    console.log('Si, son iguales');
} else {
    console.log('No, son diferentes');
}

// Son diferentes debido a que cuando se utiliza el metodo typeof 
// muesta que uno es un string y otro es un objeto
console.clear();

//Numeros
const numero1 = 20;
const numero2 = new Number(20);

console.log(numero1);
console.log(numero2);

console.clear();

//Boolean
const boolean1 = true;
const boolean2 = new Boolean(true);

console.log(boolean1);
console.log(boolean2);

console.clear();

//Funciones
const funcion1 = function(a,b) {
    return a + b;
};

const funcion2 = new Function('a', 'b', 'return 1 + 2');

console.log(funcion1(2,3));
console.log(funcion2(1,2));

console.clear();

//Objetos
const persona1 = {nombre: 'Hector'}
const persona2 = new Object({nombre: 'Hector'})

console.log(persona1);
console.log(persona2);

console.clear();


//Arreglos 
const arreglo1 = [1,2,3,4]
const arreglo2 = new Array(1,2,3,4);

console.log(arreglo1);
console.log(arreglo2);

