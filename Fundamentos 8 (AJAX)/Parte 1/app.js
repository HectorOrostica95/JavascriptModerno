// document.getElementById('cargar').addEventListener('click', cargarDatos);
document.getElementById('cargar').addEventListener('click', cargarDatos2);

function cargarDatos() {
    //Crear el objeto XMLHttpRequest
    const xhr = new XMLHttpRequest();

    //Abrir una conexion 
    xhr.open('GET', 'datos.txt', true);

    //Una vez que carga
    xhr.onload = function() {
        //Estatus de respuestas
        //200: Correcto   |   403: Prohibido   |   404: no encontrado
        if (this.status === 200) {
            console.log(this.responseText);
            document.getElementById('listado').innerHTML = `<h1> ${this.responseText} </h1>`
        }
    }

    //Enviar el request
    xhr.send();
}


//Antigua forma 
function cargarDatos2() {
    //Crear el objeto XMLHttpRequest
    const xhr = new XMLHttpRequest();

    //Abrir una conexion 
    xhr.open('GET', 'datos.txt', true);

    xhr.onreadystatechange = function() {


            console.log(`Estado: ${this.readyState} `);

            if (this.readyState === 4 && this.status === 200) {
                // console.log(this.responseText);
                document.getElementById('listado').innerHTML = `<h1> ${this.responseText} </h1>`
            }
        }
        //ready status
        /*
            00.- No inicializado
            01.- Conexion establecida
            02.- Recibido
            03.- Procesando
            04.- Respuesta de lista        
        */


    //Enviar el request
    xhr.send();
}