// Números en Javascript

const numero1 = 30,
      numero2 = 20,
      numero3 = 20.20,
      numero4 = .1020,
      numero5 = -3;


let resultado;

//Suma
resultado = numero1 + numero2
console.log('Suma = ' + resultado);

//resta
resultado = numero1 - numero2
console.log('resta = ' + resultado);

//Multiplicación
resultado = numero1 * numero2
console.log('Multiplicación = ' + resultado);

//División
resultado = numero1 / numero2
console.log('División = ' + resultado);

//Modulo
resultado = numero1 % numero2
console.log('Modulo = ' + resultado);

console.clear();

resultado = Math.PI;
console.log(resultado);

resultado = Math.round(2.4);    //Esta funcion redondea 
console.log('Caso del round: ' + resultado);         //los valores indicados
resultado = Math.round(2.6);    //Esta funcion redondea 
console.log('Caso del round: ' + resultado);         //los valores indicados


// Siempre que se use esta funcion se redondeara al numero mayor
resultado = Math.ceil(2.4);    
console.log('Caso del ceil: ' + resultado);  
resultado = Math.ceil(2.6);    
console.log('Caso del ceil: ' + resultado);         

// Siempre que se use esta funcion se redondeara al numero menor
resultado = Math.floor(2.4);    
console.log('Caso del floor: ' + resultado);       
resultado = Math.floor(2.6);    
console.log('Caso del floor: ' + resultado);       

console.clear();

//Raiz cuadrada
resultado = Math.sqrt(144);    
console.log('La raiz cuadrada de ' + resultado * resultado + ' es ' + resultado);

//Valor Absoluto
resultado = Math.abs(numero5);    
console.log('El numero absoluto: ' + resultado);       

//Potencia
resultado = Math.pow(8,3);    
console.log('La potencia es: ' + resultado);   

//Minimo
resultado = Math.min(1,2,5,9,10);    
console.log('El minimo es: ' + resultado);   

//Maximo
resultado = Math.max(1,2,5,9,10);    
console.log('El maximo es: ' + resultado);

//Aleatorio
resultado = Math.random()
console.log('El numero aleatorio es: ' + resultado);   

console.clear();
//Jugando 
resultado = (10 + 20 + 20 + 10 + 40) * .20
console.log(resultado);   