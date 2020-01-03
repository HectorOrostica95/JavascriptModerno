const numeros = [1,2,3];


console.log(numeros);

//No se pude realizar lo siguiente
// numeros = [4,5,6];

// Pero si se puede realizar lo siguiente 
numeros[0] = 4;
console.log(numeros);

//Agregar un dato al final del arreglo
numeros.push(5);
console.log(numeros);