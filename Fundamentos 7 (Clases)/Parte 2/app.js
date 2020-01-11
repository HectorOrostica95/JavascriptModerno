class Cliente {
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    imprimirSaldo() {
        return `Hola ${this.nombre} tu saldo es de: ${this.saldo}`;
    }

    static bienvenida() {
        return `Bienvenido al cajero`;
    }
}

const cliente = new Cliente('Pedro', 1000)
console.log(cliente);
console.log(cliente.imprimirSaldo() );

class Empresa extends Cliente {
    constructor (nombre, saldo, telefono, tipo) {
        //Va hacia el constructo Padre
        super(nombre, saldo);

        //No existen en el constructor Padre
        this.telefono = telefono;
        this.tipo = tipo;
    }

    //Se puede re escribir un metodo pero este 
    //se debe llamar igual al del padre
    static bienvenida() {
        return `Bienvenido al cajero para empresa`;
    }
}

const empresa = new Empresa('Empresa1', 10000,19130229, 'Construccion')


console.log(Cliente.bienvenida() )
console.log(Empresa.bienvenida() )
console.log(empresa.imprimirSaldo() )