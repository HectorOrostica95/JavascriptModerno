// const ciudades = ["Londres", "Paris", "New York", "Roma", "Manchester", { idioma: "ingles"}];

// const [primeraCiudad, segundaCiudad] = ciudades;
// const [, , , ,ciudad] = ciudades;

// console.log(primeraCiudad);
// console.log(segundaCiudad);
// console.log(ciudad);


const cliente = {
    tipo: "Premium",
    saldo: 30000,
    datos: {
        nombre: "Hector",
        apellido: "Orostica",
        residencia: {
            ciudad: "Chile"
        }
    }, 
    movimientos: ["12-03-2018", "12-03-2017", "12-03-2016"]
}

let {
    tipo, 
    datos,
    datos: {residencia},
    movimientos,
    movimientos: [, , tres]
} = cliente;

console.log(tipo);
console.log(datos.apellido);
console.log(residencia);
console.log(movimientos);
console.log(tres);
