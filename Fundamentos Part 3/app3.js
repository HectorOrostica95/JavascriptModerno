//Creando el objeto cliente
function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

//Crear un prototype
Cliente.prototype.tipoCliente = function(edad) { 
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

//Prototipo que imprime saldo y nombre
Cliente.prototype.nombreClienteSaldo = function(){
    return "Nombre " + this.nombre + ", tu saldo es de " + this.saldo + " y correspondes a un tipo de cliente " + this.tipoCliente();
}

//Retirar saldo
Cliente.prototype.retirarSaldo = function(retiro) {
    return this.saldo -= retiro;
}

const cliente1 = new Cliente("Hector", 200);
const cliente2 = new Cliente("Juan", 700);
const cliente3 = new Cliente("Nicolas", 1200);

cliente2.retirarSaldo(300);

console.log(cliente1.nombreClienteSaldo());
console.log(cliente2.nombreClienteSaldo());
console.log(cliente3.nombreClienteSaldo());

