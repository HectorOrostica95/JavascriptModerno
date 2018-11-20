//Callback en Foreach
// const ciudades = ["Londres", "New York", "Madrid", "Paris", "Viena"];

//Inline Callback
//Primera forma de realizar un callback
// ciudades.forEach(function(ciudad) {
//     console.log(ciudad);
// });

//Con funcion definida
//Segunda forma de realizar un Callback
// function callback(ciudad) {
//     console.log(ciudad)
// }

// ciudades.forEach(callback);

//Un Callback corresponde al llamado de una funcion 
//dentro de otra funcion

const paises = ["Francia", "España", "Portugal", "Australia","Inglaterra", "Irlanda"];

//Se agrega un nuevo pais despues de 2 segundos
function nuevoPais(pais, callback) {
    setTimeout(function() {
        paises.push(pais);
        callback();
    }, 2000);
}

//Los paises se muestran despues de 1 segundo
function mostrarPaises() {
    setTimeout(function() {
        let html = "";
        paises.forEach(function(pais){
            // html += "<li>" + pais + "</li>";
            html += `<li>${pais}</li>`;
        });
        document.getElementById("app").innerHTML = html;
    }, 1000);
}

nuevoPais("Alemania", mostrarPaises);

//Llamando a la funcion para mostrar los paises 
mostrarPaises();