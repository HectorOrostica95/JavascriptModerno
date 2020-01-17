const cargarPost = document.querySelector('#cargar');

cargarPost.addEventListener('click', cargarAPI)


function cargarAPI() {
    //Crear el objeto
    const xhr = new XMLHttpRequest();

    //Abrir la conexion
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

    //Carga y leer datos
    xhr.onload = function() {
        if (this.status === 200) {
            // console.log(JSON.parse(this.responseText));
            const respuesta = JSON.parse(this.responseText);

            let contenido;
            respuesta.forEach(post => {
                contenido += `
                    <h3> ${post.title}</h3>
                    <p> ${post.body}</p>
                
                `;
            });

            document.getElementById('listado').innerHTML = contenido;
        }
    }


    //Envia la conexion
    xhr.send();



    // console.log('presionado');
}