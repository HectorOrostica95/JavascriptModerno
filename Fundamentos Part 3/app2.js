//String
/*
const nombre1 = "¨Pedro";
const nombre2 = new String ("Pedro");

if (nombre1 == nombre2) {
    console.log("Si, son iguales");    
} else {
    console.log("No, son iguales");    
}
*/
//Numeros
const numero1 = 20;
const numero2 = new Number(20);

//Boolean
const boolean1 = true;
const boolean2 = new Boolean(true);

//Funciones
const funcion1 = function(a,b){
    return a+b;
};
const funcion2 = new Function("a", "b", "return a + b")

//Objetos
const persona1 = {
    nombre : "Hector"
}
const persona2 = new Object({nombre: "Hector"})

//Arreglo
const arreglo1 = [1,2,3,4];
const arreglo2 = new Array(1,2,3,4);




console.log(arreglo1);
console.log(arreglo2);