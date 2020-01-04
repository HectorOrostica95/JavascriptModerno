//Crear objeto

const persona = {
    nombre: 'Francisco',
    apellido: 'Oróstica',
    profesion: 'Diseñador gráfico',
    email: 'correo@correo.cl',
    // edad: 20,
    edad: 30,
    musica: ['Trance', 'Rock', 'Grunge'],
    hogar: {
        ciudad: 'Guadalajara',
        pais: 'Mexico'
    },
    nacimiento: function() {
        // return new Date().getFullYear() - 20;
        return new Date().getFullYear() - this.edad;

    }
}

console.log(persona);

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.musica[2]);

persona.musica.push('Alternativo');

console.log(persona.musica);
console.log(persona.hogar);
console.log(persona.hogar.pais);

console.clear();

//Otra forma de acceder a los objetos 
console.log(persona['nombre']);
console.log(persona['hogar']['pais']);

console.log(persona.nacimiento() );