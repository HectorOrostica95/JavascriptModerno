//Callback en forEach
const ciudades = ['Londres', 'New York', 'Madrid', 'Paris', 'Viena'];

//Inline Callback
ciudades.forEach(ciudad => {
    console.log(ciudad);
});


//Con funcion definida  
function callback(ciudad) {
    console.log(ciudad);
}

ciudades.forEach(callback)

console.clear();


//Listado de paises
paises = ['Francia', 'España', 'Portugal', 'Australia', 'Inglaterra', 'Irlanda'];

// Se agrega un nuevo pais despues de dos segundo
function nuevoPais(pais, callback) {
    setTimeout(() => {
        paises.push(pais);
        callback();
    }, 2000);
}

// Los paises es muestran luego de un segundo 
function mostrarPaises() {
    setTimeout(() => {
        let html = '';

        paises.forEach(pais => {
            html += `<li>${pais}</li>`;
        });

        document.getElementById('app').innerHTML = html;
    }, 1000);
}

//Agregar nuevo pais
nuevoPais('Alemania', mostrarPaises);

//mostrar los paises
mostrarPaises();