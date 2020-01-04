// try {
//     algo();
// } catch (error) {
//     console.log(error)
// }

//Existe un adicional el cual es el finally, a continuacion se muestra

try {
    algo();
} catch (error) {
    console.log(error)
} finally{
    console.log('Me vale verga lo que haya antes')
}

function obtenerClientes() {
    console.log(`Descargando...`);

    setTimeout(function() {
        console.log('Completo')
    }, 3000);
}



obtenerClientes();
