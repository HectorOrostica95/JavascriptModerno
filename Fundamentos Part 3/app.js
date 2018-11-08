//Object Literal
//Corresponde a la forma que se muestra acontinuacion
/*
const cliente = {
    nombre: "Hector",
    saldo: 200,
    tipoCliente: function () { 
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
}*/
// console.log(cliente.tipoCliente() );

//Metodo alternativo 
function Cliente(nombre, saldo) { 
    this.nombre = nombre;
    this.saldo = saldo;
    this.tipoCliente = function () { 
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
 }


const persona = new Cliente("Hector", 20000);
const persona2 = new Cliente("Francisco", 6000);

console.log(persona);
console.log(persona2);
console.log(persona2.tipoCliente() );