// //Destructuring forma anterior

// function reserva(completa, opciones){
//     opciones = opciones || {}

//     let metodo = opciones.metodoPago,
//         cantidad = opciones.cantidad,
//         dias = opciones.dias;

//     //Visualizando datos recibidos         
//     console.log(metodo);
//     console.log(cantidad);
//     console.log(dias);
// }

// //Llamando a la funcion
// reserva(
//     true,
//     {
//         metodoPago: "tarjeta",
//         cantidad: 2000,
//         dias: 3
//     }
// );

// //Destructuring forma actual
// function reserva(completa, opciones){

//     let {metodoPago, cantidad, dias} = opciones;

//     //Visualizando datos recibidos         
//     console.log(metodoPago);
//     console.log(cantidad);
//     console.log(dias);
// }

// //Llamando a la funcion
// reserva(
//     true,
//     {
//         metodoPago: "tarjeta",
//         cantidad: 2000,
//         dias: 3
//     }
// );

//Otra forma de destructuring forma actual
function reserva(completa, {
                            metodoPago ="efectivo", 
                            cantidad = 0, 
                            dias = 0
                        } = {}){;
    if (completa){
        console.log("Proceder a reservar...");
    } else {
        console.log("Abandonar...");
    }
}

//Llamando a la funcion
reserva(
    true,
    {
        metodoPago: "tarjeta",
        cantidad: 2000,
        dias: 3
    }
);