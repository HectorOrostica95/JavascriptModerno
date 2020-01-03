// Creando un Arreglo

const numeros = [10,20,30,40,50,60];
// console.log(numeros);

//Arreglo Mezclado
const mezclado = ['Hola',20, true, null, false, undefined];
// console.log(mezclado);

// Arreglo de Strings (Método alternativo)
const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril');
console.log(meses);
console.log(meses.length);
console.log(Array.isArray(meses));

//Prueba erronea de validación de arreglo
// let nombre = 'Hector';
// console.log(Array.isArray(nombre));

console.log(meses[3]);
console.log(meses[4]);

//Primera forma de insertar un registro 
meses[4] = 'Mayo';
console.log(meses[4]);

//Segunda forma de insertar un registro
meses.push('Junio');
console.log(meses);

// Para buscar un dato en el arreglo 
console.log (meses.indexOf('Abril'));
console.log(meses[3]);

console.clear();

// Datos originales

//Metodo para agregar un elemento al inicio del arreglo
meses.unshift('Mes 0');
console.log(meses);

//Como eliminar el ultimo elemento del arreglo 
meses.pop();
console.log(meses);

//Como eliminar el primer elemento del arreglo
meses.shift();
console.log(meses);

//Para quitar un rango
meses.splice(2,1);
console.log(meses);

//Para revertir el arreglo
meses.reverse();
console.log(meses);

//Para unir dos arreglos
let arreglo1 = [1,2,3],
    arreglo2 = [5,6,7];
console.log(arreglo1.concat(arreglo2));

console.clear();

//Como ordenar un arreglo (String);
const frutas = ['Platanos', 'Manzana', 'Fresa', 'Naranja', 'Zanahoria'];
console.log(frutas)
frutas.sort();
console.log(frutas)

//Como ordenar un arreglo (Number);
arreglo1 = [3,9,91,92,23,45,21,56,1,100,10];
console.log(arreglo1);
arreglo1.sort();
console.log(arreglo1)

    //Forma correcta
    //De Menor a Mayor
    arreglo1 = [3,9,91,92,23,45,21,56,1,100,10];
    arreglo1.sort(function(x,y){
        return x - y;
    });
    console.log(arreglo1)

    //De Mayor a Menor
    arreglo1 = [3,9,91,92,23,45,21,56,1,100,10];
    arreglo1.sort(function(x,y){
        return y - x;
    });
    console.log(arreglo1)