async function leerTodos() {
    //Esperar la respuesta 
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/todos");

    //Procede cuando la respuesta esta hecha
    const datos = await respuesta.json();

    return datos;
}

leerTodos()
    .then(usuarios => console.log(usuarios))
