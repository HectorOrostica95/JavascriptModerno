import { Cliente } from "./cliente.js";

//Exportar variables
export const nombreEmpresa = "TecnoPolis";
export let ahorro = 1000;
export const categoria = "Aprendizaje";

//Exportar funciones
export function mostrarInformacion(nombre, ahorro, categoria){
    return `Cliente: ${nombre} - Ahorrro: ${ahorro} - Categoria: ${categoria}`;
}

export function mostrarNombre(nombre){
    return `Nombre del cliente: ${nombre}`;
}

//Utilizar la clase del modulo cliente
export class Empresa extends Cliente {
    constructor (nombre, ahorro, categoria){
        super(nombre, ahorro);
        this.categoria = categoria;
    }
    mostrarInformacion(){
        return `Cliente: ${this.nombre} - Ahorrro: ${this.ahorro} - Categoria: ${this.categoria}`;
    } 
}