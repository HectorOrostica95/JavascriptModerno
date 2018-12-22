class Interfaz {
    constructor(){
        this.init();    
    }

    init(){
        this.construirSelect();
    }
    
    construirSelect() {
        Cotizador.obtenerMonedasAPI()
        .then((monedas) => {
            //Crear un select de opciones
            const select = document.querySelector("#criptomoneda");
            
            //iterar los resultados de la api
            for (const [key, value] of Object.entries(monedas.monedas.Data)) {
                //Añadir el Symbol y el nombre como opciones
                const opcion = document.createElement("option");
                opcion.value = value.Symbol; 
                opcion.appendChild(document.createTextNode(value.CoinName));
                select.appendChild(opcion)    
            }
        }).catch((err) => {
            
        });
    }

    mostrarMensaje(mensaje, clases){
        const div = document.createElement("div");
        div.className = clases;
        div.appendChild(document.createTextNode(mensaje));

        //Seleccionar donde se mostrara el mensaje
        const divMensaje = document.querySelector(".mensajes");
        divMensaje.appendChild(div);
        
        //Mostrar el mensaje de error
        setTimeout(() => {
            document.querySelector(".mensajes div").remove();
        }, 3000);
    }

    //Mostrar resultado de la cotizacion
    mostrarResultado(resultado, moneda, crypto){
        //En caso de resultado anterior ocultarlo
        const resultadoAnterior = document.querySelector("#resultado > div");
        if (resultadoAnterior) {
            resultadoAnterior.remove(); 
        }

        const datosMonedas = resultado[crypto][moneda];
        console.log(datosMonedas);

        //Recortar digitos de precio
        let precio = datosMonedas.PRICE.toFixed(2),
            porcentaje = datosMonedas.CHANGEPCTDAY.toFixed(2),
            actualizado = new Date(datosMonedas.LASTUPDATE * 1000).toLocaleDateString('es-CL');

        //Construir el template
        let templateHTML = `
            <div class="card bg-warning">
                <div class="card-body text-light">
                    <h2 class="card-title">Resultado:</h2>
                    <p>El precio de ${datosMonedas.FROMSYMBOL} a moneda ${datosMonedas.TOSYMBOL} es de $ ${precio}</p>
                    <p>Varación último día: %${porcentaje}</p>
                    <p>Última actualización: ${actualizado}</p>
                </div>
            </div>
        `;

        //Mostar spinner
        this.mostrarOcultarSpinner("block");

        setTimeout(() => {

            //Insertar el resultado
            document.querySelector("#resultado").innerHTML = templateHTML;
            
            //Ocultar spinner
            this.mostrarOcultarSpinner("none");

        }, 3000);

    }

    //Mostrar spinner de carga al enviar la cotizacion
    mostrarOcultarSpinner(vista){
        const spinner = document.querySelector(".contenido-spinner");
        spinner.style.display = vista;
    }
    
}