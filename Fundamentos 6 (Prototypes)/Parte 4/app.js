function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

//Prototype que imprime saldo y nombre 
Cliente.prototype.nombreClienteSaldo = function() {
    return `Nombre: ${this.nombre}, tu saldo es de ${this.saldo}`;
}

//Banca para empresas
function Empresa(nombre, saldo, telefono, tipo) {
    Cliente.call(this, nombre, saldo);
    this.telefono = telefono;
    this.tipo = tipo;
}

Empresa.prototype = Object.create(Cliente.prototype);

const empresa = new Empresa('Udemy', 1000000, 12091398, 'Educacion');
console.log(empresa);
console.log(empresa.nombreClienteSaldo() );

