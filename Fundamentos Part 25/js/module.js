const comprarBoleto = (function(){
    //Privado
    let evento = 'Conferencia JS 2019';
    let precio = 200;

    const adquirirBoleto = () => {
        const elemento = document.createElement('p');
        elemento.textContent= `Comprando boleto para: ${evento}`;
        document.querySelector('#app').appendChild(elemento);
    }

    //       Publico
    // Solo lo que se encuentra dentro del return se puede acceder 
    // desde afuera, ya que lo demas se encuentra encapsulado
    return{
        mostrarBoleto: function () { 
            adquirirBoleto();
        }
    }
})();

comprarBoleto.mostrarBoleto();