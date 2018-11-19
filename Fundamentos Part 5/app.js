document.getElementById("cargar").addEventListener("click", cargarDatos);

function cargarDatos() {
    //Crear el objeto xmlhttprequest
    const xhr = new XMLHttpRequest();

    //Abrir una conexion
    xhr.open("GET", "datos.txt", true);

    //Una vez que carga 
    // xhr.onload = function() {
    //     //200: correcto ||  403: Prohibido || 404: No encontrado
    //     if (this.status === 200){
    //         document.getElementById("listado").innerHTML = `<h1>${this.responseText}</h1>`;
    //     }
    // }

/*    Forma antigua de realizarlo 
    Corresponde a ready status

    0.- No iniciado
    1.- Conexion establecida
    2.- Recibido
    3.- Procesando
    4.- Respuesta lista
*/

    xhr.onreadystatechange = function () {
        console.log("Estado " + this.readyState);
        if (this.readyState === 4 && this.status === 200) {
            // console.log(this.responseText);
        }
    }


    //Enviar el request
    xhr.send();
}