let nombre, mensaje;

nombre = 'Héctor Francisco';
nombre = "Héctor Francisco";
console.log(nombre);

mensaje = 'Y entonces dije "Buen Curso!!"'
console.log(mensaje); //Solo cambian las comillas

mensaje = "Y entonces dije 'Buen Curso!!'"
console.log(mensaje); //Solo cambian las comillas

console.clear()

// Cuando se quiere que tenga comillas simples en todo
// Se debe realizar de la siguiente manera 

mensaje = 'Y entonces dije \'Buen Curso!!\''
console.log(mensaje); //Solo cambian las comillas

// A continuacion se muestra como concatenar
mensaje = 'Java' + 'script'
console.log(mensaje);

console.clear()

let aprendiendo = 'Aprendiendo',
    tecnologia = 'Javascript';

console.log(aprendiendo + ' ' + tecnologia);

console.log(`${aprendiendo} ${tecnologia}`);