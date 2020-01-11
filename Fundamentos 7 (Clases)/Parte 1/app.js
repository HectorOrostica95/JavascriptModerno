class Cliente {
    constructor(nombre, apellido, saldo){
        this.nombre = nombre;
        this.apellido = apellido;
        this.saldo = saldo;
    }

    imprimirSaldo() {
        return `Hola ${this.nombre} tu saldo es de: ${this.saldo}`;
    }

    tipoCliente() {
        let tipo
        if (this.saldo > 10000) {
            tipo = 'Gold'
        }else if (this.saldo > 5000) {
            tipo = 'Platinium'
        } else {
            tipo = 'Normal'
        }
        return tipo;
    }

    retirarSaldo(retiro) {
        return this.saldo -= retiro;
    }

    static bienvenida() {
        return `Bienvenido al cajero`;
    }
}

const maria = new Cliente('Maria', 'Perez', 11000);

maria.retirarSaldo(3000)

console.log(maria);
console.log(maria.imprimirSaldo() );
console.log(maria.tipoCliente() );

//Para llamar al metodo statico se debe realizar de la siguiente forma
console.log(Cliente.bienvenida() );