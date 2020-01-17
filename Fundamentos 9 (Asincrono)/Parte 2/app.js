//Promise

const esperando = new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve('se ejecuto');
    }, 5000);
});

esperando.then((mensaje) => {
    console.log(mensaje);
});

console.clear();

const aplicarDescuento = new Promise(function(resolve, reject) {
    const descuento = true;
    if (descuento) {
        resolve('Descuento Aplicado');
    } else {
        reject('No se puede aplicar el descuento');
    }
});

aplicarDescuento.then((resultado) => {
    console.log(resultado);
}).catch((error) => {
    console.log(error);
});