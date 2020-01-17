document.querySelector('#generar-nombre').addEventListener('submit', cargarNombres);

//LLamado a AJAX e imprimir resultados 
function cargarNombres(e) {
    e.preventDefault();

    // console.log('llegue');
    //Leer las variables
    const origen = document.getElementById('origen');
    const origenSeleccionado = origen.options[origen.selectedIndex].value;
    const genero = document.getElementById('genero');
    const generoSeleccionado = genero.options[genero.selectedIndex].value;
    const numero = document.getElementById('numero').value

    let url = '';

    url += 'https://uinames.com/api/?';

    //Si hay un origen agregarlo a la URL
    if (origenSeleccionado !== '') {
        url += `region=${origenSeleccionado}&`;
    }

    //Si hay un genero agregarlo a la URL
    if (generoSeleccionado !== '') {
        url += `gender=${generoSeleccionado}&`;
    }

    //Si hay una cantidad agregarlo a la URL
    if (numero !== '') {
        url += `amount=${numero}&`;
    }

    //Conectar con AJAX 
    // iniciar XMLHttpRequest
    const xhr = new XMLHttpRequest();

    //Abrimos la conexion
    xhr.open('GET', url, true);

    // datos de impresion del template
    xhr.onload = function() {
        if (this.status === 200) {
            // console.log(this.responseText);
            // console.log(JSON.parse(this.responseText));
            const nombres = JSON.parse(this.responseText);

            //Generar el HTML
            let htmlNombres = '<H2> Nombres Generados </H2>'
            htmlNombres += '<ul class="lista">'

            //Imprimir cada nombre
            nombres.forEach(nombre => {
                htmlNombres += `<li>${nombre.name}</li>`
            });

            htmlNombres += '</ul>'

            document.getElementById('resultado').innerHTML = htmlNombres

        }
    }

    //Enviar el Request 
    xhr.send();

}