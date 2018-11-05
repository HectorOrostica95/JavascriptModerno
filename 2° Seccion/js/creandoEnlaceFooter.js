//Creando un enlace
const enlace = document.createElement("a");

//Agregamos una clase
enlace.className = "enlace";

//Agregamos el ID
enlace.id = "nuevo-id";

//agregamos el atributo href
enlace.setAttribute("href", "#");

//Agregar el texto
enlace.textContent = "Nuevo enlace";

document.querySelector("#secundaria").appendChild(enlace);
// console.log(enlace);

//Esto continua en reemplazar elementos