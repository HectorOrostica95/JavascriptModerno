// Tambien se le conoce como suscriptor-publicador

let observer = {
    obtenerOfertas: function(callback) {
        if (typeof callback === "function"){
            this.subscribers[this.subscribers.length] = callback;
        }
    },
    cancelarOfertas: function (callback) {
        for (let i = 0; i < this.subscribers.length; i++) {
            if (this.subscribers[i] === callback){
                delete this.subscribers[i];
            }
        }
    },
    publicarOferta: function (oferta) {
        for (let i = 0; i < this.subscribers.length; i++) {
            if (typeof this.subscribers[i] === "function"){
                this.subscribers[i](oferta);
            }
        }
    },
    crear: function (objeto) {
        for (let i in this) {
            if ( this.hasOwnProperty(i) ){
                objeto[i] = this[i];
                objeto.subscribers = [];
            }
        }
    }
}

//Vendedores

const udemy = {
    nuevoCurso: function () {
        const curso = 'Un nuevo curso de Javascript';
        this.publicarOferta(curso);
    }
}

const facebook = {
    nuevoAnuncio: function () {
        const oferta = 'Compra un celular';
        this.publicarOferta(oferta);
    }
}

//Crear los publicadores
observer.crear(udemy);
observer.crear(facebook);

const Hector = {
    compartir: function(oferta) { 
        console.log('Hector dice: Excelente oferta!! ' + oferta);
    }
};

const Javiera = {
    interesa: function (oferta) { 
        console.log('Javiera dice: Me interesa la oferta de: ' + oferta);
    }
};

udemy.obtenerOfertas(Hector.compartir);
udemy.obtenerOfertas(Javiera.interesa);
udemy.nuevoCurso();
udemy.cancelarOfertas(Javiera.interesa);
facebook.obtenerOfertas(Javiera.interesa)
facebook.nuevoAnuncio();