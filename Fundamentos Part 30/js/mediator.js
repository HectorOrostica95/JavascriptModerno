const Vendedor = function (nombre) {
    this.nombre = nombre;
    this.sala = null;
}

const Comprador = function (nombre) {
    this.nombre = nombre;
    this.sala = null;
}

Vendedor.prototype = {
    oferta: function (articulo, precio) {
        console.log(`Tenemos el sigueinte articulo ${articulo}, iniciamos en ${precio}`);
    },
    vendido: function (comprador) {
        console.log(`Vendido a ${comprador} (Sonido del mazo)`);
    }
}

Comprador.prototype = {
    oferta: function (mensaje, comprador) {
        console.log(`${comprador.nombre} : ${mensaje}`);
    }
}

const Subasta = function () {
    let compradores = {};

    return {
        registrar: function(usuario){
            compradores[usuario.nombre]= usuario;
            usuario.sala = this;
            console.log(compradores);
        }
    }
}

//instanciar las clases
const hector = new Comprador("Hector");
const pablo = new Comprador("Pablo");
const javiera = new Comprador("Javiera");

const vendedor = new Vendedor("Vendedor");

const subasta = new Subasta();
subasta.registrar(hector);
subasta.registrar(pablo);
subasta.registrar(javiera);

vendedor.oferta("Mustang 1966", "3000");
hector.oferta(3500, hector);
javiera.oferta(3800, javiera);
pablo.oferta(4000, pablo);
vendedor.vendido(pablo.nombre);