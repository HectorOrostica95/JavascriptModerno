//Object Create


const Cliente = {
    imprimirSaldo: function() { 
        return "Hola "+ this.nombre + ", tu saldo es: " + this.saldo;
    },
    retirarSaldo: function(retiro) {
        return this.saldo -= retiro;
    }
}

//Crear el objeto
const javi = Object.create(Cliente);
javi.nombre = "Javiera";
javi.saldo = 1000;

javi.retirarSaldo(300);
console.log(javi.imprimirSaldo());