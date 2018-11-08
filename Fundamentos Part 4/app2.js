//Creando la clase de cliente
class Cliente {
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    imprimirSaldo(){
        return "Hola " + this.nombre + ", tu saldo es de " + this.saldo
    }

    static bienvenida(){
        return "Bienvenido al cajero";
    }
}

// const javi = new Cliente ("Javiera", 10000);
// console.log(javi.imprimirSaldo());


class Empresa extends Cliente{
    constructor(nombre, saldo, telefono, tipo){
        //Va hacia el contructor Padre
        super(nombre, saldo);

        //No existen en el contructor Padre
        this.telefono = telefono;
        this.tipo = tipo;
    }

    static bienvenida(){
        return "Bienvenido al cajero de Empresas";
    }
}

// const empresa = new Empresa("Perros y Gatos", 10000, 944623921, "Tecnologias de la Informacion");
// console.log(empresa.imprimirSaldo() );
console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());