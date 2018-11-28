//Async Awaait 

async function obtenerClientes() {
    //Crear una promise
    const clientes = new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve("Clientes descargando...");
        }, 2000);
    });

    //Error o no...
    const error = false;

    if((!error)){
        const respuesta = await clientes;
        return respuesta;
    } else {
        await Promise.reject("Hubo un error");
    }
}

obtenerClientes()
    .then(res => console.log(res))
    .catch(error => console.log(error));