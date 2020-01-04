//En JavaScript existe un objeto llamado Date 
const diaHoy = new Date();
console.log(diaHoy);

// Fecha en especifico Mes Día y Año

navidad2017 = new Date(2017,11,25);
console.log(navidad2017)

let valor; 
// Mes
valor = diaHoy.getMonth(); 

//Día
valor = diaHoy.getDate(); 

//Año 
valor = diaHoy.getFullYear(); 

//hora
valor = diaHoy.getHours(); 

//Minutos
valor = diaHoy.getMinutes(); 

//Milisegundos desde 1970
valor = diaHoy.getTime(); 

console.log(valor);

console.clear();

//Cambiando los datos 
valor = diaHoy.getFullYear(); 
valor = diaHoy.setFullYear(2015); 
valor = diaHoy.getFullYear(); 
console.log(valor);
