const edad = 8;

if (edad != 18) {
    console.log('Si puedes entrar al sitio');    
} else {
    console.log('No puedes entrar al sitio');
}

console.clear();
let puntaje // = 1000;

if (typeof puntaje != 'undefined') {
    console.log(`El puntaje fue de ${puntaje}`);    
} else {
    console.log(`No hay puntaje`);    
}

let efectivo = 500;
let totalCarrito = 300;

if (efectivo > totalCarrito) {
    console.log(`Pago Correcto`);
} else {
    console.log(`Fondos insuficientes`);
}

console.clear();

let hora = 25;
// if (hora <= 10 ) {
//     console.log('Buenos Días');
// } else {
//     console.log('Buenas Tardes');
// }

//Forma mas optima
if (hora > 0 && hora <= 10 ) {
    console.log('Buenos Días');
} else if (hora > 10 && hora <= 18){
    console.log('Buenas Tardes');
} else if (hora > 18 && hora <= 24){
    console.log('Buenas Noches');
} else {
    console.log('Hora no valida');
}

//Ya se encuentra declarado la variable puntaje
puntaje = 100
if (puntaje < 150 ) {
    console.log('Puntaje < 150');
} else if(puntaje < 200) {
    console.log('Puntaje < 200');
}

console.clear();

let efectivo1 = 300,
    credito1 = 300,
    // credito1 = 700,
    disponible = efectivo1 + credito1,
    totalCarrito1 = 500;

    if (totalCarrito1 < efectivo1 || totalCarrito1 < credito1) {
        console.log('Puedo pagar');
    }else if (totalCarrito1 < disponible){
        console.log('Pague con ambos');
    } else {
        console.log('No puedo pagar');
    }

//Ternario 
const logueado = true;
console.log(logueado === true ? 'Si se logueo' : 'No se logueo');