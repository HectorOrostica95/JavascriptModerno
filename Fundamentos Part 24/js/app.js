import * as cliente from './cliente.js';
// import { nombreCliente, ahorro, mostrarInformacion, mostrarNombre, Cliente } from './cliente.js';
import { nombreEmpresa, ahorro as ahorroEmpresa, categoria, mostrarInformacion, Empresa } from './empresa.js';

// console.log(cliente);
// console.log(nombreEmpresa);
// console.log(nombreCliente);

// console.log(ahorro);
// console.log(ahorroEmpresa);

// console.log(categoria);


let empresa = new Empresa(nombreEmpresa, ahorroEmpresa, categoria);
console.log(empresa.mostrarInformacion());



//Info cliente
// const info = mostrarInformacion(nombreCliente, ahorro);
const info = cliente.mostrarInformacion(cliente.nombreCliente, cliente.ahorro);
console.log(info);

//Info empresa
// const infoEmpresa = mostrarInformacion(nombreEmpresa, ahorroEmpresa, categoria);
// console.log(infoEmpresa);

// const mostrarNombreCliente = cliente.mostrarNombre(cliente.nombreCliente);
// console.log(mostrarNombreCliente);

// //Como utilizar la clase
// let clientes = new cliente.Cliente(cliente.nombreCliente, cliente.ahorro);
// console.log(clientes);
// console.log(clientes.mostrarInformacion());