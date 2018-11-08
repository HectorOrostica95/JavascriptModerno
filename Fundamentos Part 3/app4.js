//Creando el objeto cliente
function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

//Prototipo que imprime saldo y nombre
Cliente.prototype.nombreClienteSaldo = function(){
    return "Nombre " + this.nombre + ", tu saldo es de " + this.saldo;
}

// const cliente1 = new Cliente("Hector", 200);
// console.log(cliente1.nombreClienteSaldo());

//Banca para empresas
function Empresa(nombre, saldo, telefono, tipo) {
    Cliente.call(this, nombre, saldo)
    this.telefono = telefono;
    this.tipo = tipo;
}

Empresa.prototype = Object.create(Cliente.prototype)

const empresa = new Empresa("Udemy", 100000, 982237615, "Educacion");

console.log(empresa.nombreClienteSaldo());