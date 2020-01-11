function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
    // this.tipoCliente = function() {
    //     let tipo
    //     if (this.saldo > 1000) {
    //         tipo = 'Gold'
    //     }else if (this.saldo > 500) {
    //         tipo = 'Platinium'
    //     } else {
    //         tipo = 'Normal'
    //     }
    //     return tipo;
    // }
}

const cliente1 = new Cliente('Hector', 100);
const cliente2 = new Cliente('Javiera', 600);
const cliente3 = new Cliente('Cesar', 1200);

console.log(cliente1);
// console.log(cliente1.tipoCliente() );

console.log(cliente2);
console.log(cliente3);

console.clear();

//Creando un prototype
Cliente.prototype.tipoCliente = function() {
    let tipo
    if (this.saldo > 1000) {
        tipo = 'Gold'
    }else if (this.saldo > 500) {
        tipo = 'Platinium'
    } else {
        tipo = 'Normal'
    }
    return tipo;
}

//Prototype que imprime saldo y nombre 
Cliente.prototype.nombreClienteSaldo = function() {
    return `Nombre: ${this.nombre}, tu saldo es de ${this.saldo}, Tipo de Cliente ${this.tipoCliente() }`;
}

//Retirar saldo
Cliente.prototype.retirarSaldo = function(retiro) {
    return this.saldo -= retiro
}

cliente2.retirarSaldo(300)


console.log(cliente1);
console.log(cliente1.tipoCliente() );

console.log(cliente1.nombreClienteSaldo() );
console.log(cliente2.nombreClienteSaldo() );
console.log(cliente3.nombreClienteSaldo() );

