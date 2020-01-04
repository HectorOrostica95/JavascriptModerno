// IIFE
(function(tecnologia) {
    // console.log('Creando un IIFE');
    console.log(`Aprendiendo ${tecnologia}`);
})('JavaScript');

//Métodos de propiedad
//Cuando iuna función se pone dentro de un objeto

const musica = {
    reproducir: function(id) {
        console.log(`Reproduciendo canción ID: ${id}`);
    }, pausar: function() {
        console.log('Pause a la música');
    }
}

// Los métodos también puden guardarse / crearse fuera del objeto
musica.borrar = function(id) {
    console.log(`Borrando la canción con el ID: ${id}`);
}
musica.reproducir(30);
musica.pausar();
musica.borrar(2);
