let nombre, mensaje;

nombre = 'Héctor Francisco';
console.log(nombre);

mensaje = 'Y entonces dije \'Buen Curso!!\''
console.log(mensaje); //Solo cambian las comillas

// A continuacion se muestra como concatenar
mensaje = 'Java' + 'script'
console.log(mensaje);

console.clear()

let aprendiendo = 'Aprendiendo',
    tecnologia = 'Javascript';

console.log(tecnologia.length);

console.log(tecnologia.concat(' ', 'es genial'));

console.log(tecnologia.toUpperCase());  //Mayuscula
console.log(tecnologia.toUpperCase());  //minuscula 

console.clear()

mensaje = 'Aprendiendo Javascript, CSS, HTML para ser front end';
console.log(mensaje.indexOf('Javascript'));  
//Regresa 12 ya que en ese caracter 
//se encuentra la palabra Javascript

console.log(mensaje.indexOf('PHP'));  
//Si regresa un -1 quiere decir que 
//no se encuentra la palabra buscada

console.log(mensaje.substring(5, 21));
// Comienza desde izquerda a derecha a contar y 
//toma la cantidad de caracteres indicados

console.log(mensaje.slice(-3));
// Al escribir un menos adelante del numero este 
//empieza a contar desde derecha a izquerda

console.log(mensaje.split(' '));
//Busca los espacios que se encuentran en la cadena 
//de texto indicada y los separa

console.clear();

console.log(mensaje.replace('CSS', 'PHP'));
//Este metodo reemplaza la palabra indicada 
//en las primeras comillas por la que se encuentra 
//en las segundas comillas 

console.log(mensaje.includes('CSS'));
//Indica con un true o false si la palabra indicada en las 
//comillas se encuentra en la cadena de texto ingresada

tecnologia = 'JavaScript' + " ";

console.log(tecnologia.repeat(10));
//Este metodo repite la palabra indicada