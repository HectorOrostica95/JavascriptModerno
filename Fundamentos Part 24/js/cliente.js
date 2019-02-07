
//Exportar variables
export const nombreCliente = "Héctor";
export let ahorro = 200;

//Exportar funciones
export function mostrarInformacion(nombre, ahorro){
    return `Cliente: ${nombre} - Ahorrro: ${ahorro}`;
}

export function mostrarNombre(nombre){
    return `Nombre del cliente: ${nombre}`;
}

//Exportar una clase
export class Cliente{
    constructor(nombre, ahorro){
        this.nombre = nombre;
        this.ahorro = ahorro;
    }
    mostrarInformacion(){
        return `Cliente: ${this.nombre} - Ahorrro: ${this.ahorro}`;
    } 
}