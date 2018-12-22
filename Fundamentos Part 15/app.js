// const cliente = {
//     tipo: "Premium",
//     nombre: "Mexico",
//     datos: {
//         ubicacion: {
//             ciudad: "Santiago",
//             pais: "Chile"
//         },
//         cuenta: {
//             desde: "10-08-1995",
//             saldo: 4000
//         }
//     }
// }

// let {datos: {ubicacion}} = cliente;
// console.log(ubicacion);
// console.log(ubicacion.ciudad);
// console.log(ubicacion.pais);

// let {datos: {cuenta}} = cliente;
// console.log(cuenta);
// console.log(cuenta.desde);
// console.log(cuenta.saldo);

// const cliente = {
//     nombre: "Francisco",
//     tipo: "Premium",
//     saldo: 10000
// }

// let { nombre, tipo, saldo} = cliente;
// console.log(nombre);
// console.log(tipo);
// console.log(saldo);


const cliente = {
    nombre: "Francisco"
}

let { nombre, tipo = "basico", saldo = 0} = cliente;
console.log(nombre);
console.log(tipo);
console.log(saldo);