//Creando la clase de cliente
class Cliente {
    constructor(nombre, apellido, saldo){
        this.nombre = nombre;
        this.apellido = apellido;
        this.saldo = saldo;
    }

    imprimirSaldo(){
        return "Hola " + this.nombre + ", tu saldo es de " + this.saldo
    }

    tipoCliente() { 
        let tipo;
        if (this.saldo > 1000) {
            tipo = "Gold";
        } else if (this.saldo > 500) { 
            tipo = "Platinum";
        } else {
            tipo = "Normal";
        }
        return tipo;
    }

    retirarSaldo(retiro){
        return this.saldo -= retiro
    }

    static bienvenida(){
        return "Bienvenido al cajero";
    }

}
console.log(Cliente.bienvenida());


const javi = new Cliente ("Javiera", "Muñoz", 10000);
javi.retirarSaldo(9200);

// console.log(javi);
// console.log(javi.imprimirSaldo());
// console.log(javi.tipoCliente());