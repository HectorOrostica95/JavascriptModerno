//Expresiones regulares

// const exp1 = new RegExp('/abc/');
// const exp2 = /abc/;

// console.log(exp1);
// console.log(exp2);

let valor, expReg;

// expReg = /[0123456789]/;
expReg = /[0-9]/
valor = 1995;

//Evaluar una fecha
expReg = /\d\d-\d\d-\d\d\d\d/ ;
valor = '20-10-2019'

//Evaluar hora
expReg = /\d\d:\d\d \D\D/ ;
valor = '10:30 PM'

//Evaluar mas de un digito
expReg = /\d+/ ;
valor = '10098876543456'

//Forma de negar numeros
expReg = /\[^0-9]/ ;
valor = '103456'

//Otra sintaxis para la fecha 
expReg = /\d{1,2}-\d{1,2}-\d{4}/ ;
valor = '10-08-2019'

//Revisa que solo sean letras o numeros 
expReg = /\w+/
valor = 'Mensaje de prueba';
valor = 1234;
valor = ' ';

//Revisa que sean puros numeros
expReg = /\d+/
valor = 123;
valor = 'Holas';

expReg = /([0-9])\w+/;
valor = 123

//Que el texto sean puras mayusculas 
expReg = /([A-Z])\w+/
valor = 'hola mundo';
valor = 124;
valor = 'MENSAJE EN MAYUSCULAS';

//Que el texto sean puras minusculas 
expReg = /([a-z])\w+/
valor = 'MENSAJE EN MAYUSCULAS';
valor = 124;
valor = 'hola mundo';


console.log(expReg.test(valor));