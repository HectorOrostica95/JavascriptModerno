//SYMBOL

/* Los simbolos son unicos, al declarar dos 
similares estos no son iguales */

const simbolo = Symbol();
const simbolo2 = Symbol("Descripcion aqui");

console.log(simbolo);
console.log(simbolo2);

console.log(simbolo === simbolo2);  //False

//Cada simbolo tiene sus propios valores, es por ello que nos estrega un false
console.log(Symbol() === Symbol());  //False


let nombre = Symbol();
let apellido = Symbol();

//Crear persona
let persona = {};

persona.nombre = "Hector";
persona[nombre] ="Francisco";
persona[apellido] = "Orostica";
persona.saldo = 100;
persona.tipoCliente = "Normal";

console.log(persona);

//Se accede a los valores del objeto
console.log(persona.nombre);

//Accede a los valores del Simbol
console.log(persona[nombre]);

//Solo imprime los valores 
for (let i in persona){
    console.log(`${i} :  ${persona[i]}`);
}