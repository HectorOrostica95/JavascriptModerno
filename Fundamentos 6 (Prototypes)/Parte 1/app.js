//Object Literal

const cliente = {
    nombre: 'Hector',
    saldo: 2100,
    tipoCliente: function () {
        let tipo;

        if (this.saldo > 1000) {
            tipo = 'Gold';
        } else if (this.saldo > 500) {
            tipo = 'Platinum';
        } else {
            tipo = 'Normal';
        }
        return tipo;
    }
}

console.log(cliente.tipoCliente() )

console.clear();

function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.tipoCliente = function(edad) {
        let tipo;

        if (this.saldo > 1000) {
            tipo = 'Gold';
        } else if (this.saldo > 500) {
            tipo = 'Platinum';
        } else {
            tipo = 'Normal';
        }
        return tipo;
    }
}
const persona = new Cliente('Hector', 20000);
const persona2 = new Cliente('Francisco', 5000);

console.log(persona);
console.log(persona2.tipoCliente() );
