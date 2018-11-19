//Primera forma

// const cargarPosts = document.querySelector("#cargar");
// cargarPosts.addEventListener("click", function(){
    
// });

const cargarPosts = document.querySelector("#cargar").addEventListener("click", cargaAPI);

function cargaAPI(){
    //Crear el objeto 
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);

    xhr.onload = function () {
        if(this.status === 200){
            const respuesta = (JSON.parse(this.responseText));

            let contenido = "";
            respuesta.forEach(function(post) {
                contenido += `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                `;
            });
            document.getElementById("listado").innerHTML = contenido;
        }
    }
    //Enviar la conexion
    xhr.send();

};