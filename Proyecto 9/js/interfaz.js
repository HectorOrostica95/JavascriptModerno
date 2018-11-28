class Interfaz{

    constructor() {
        this.init();
    }

    init() {
        this.construirSelect();
    }

    construirSelect() {
        cotizador.obtenerMonedasAPI()
            .then(monedas => {
                // Crear un select con las opciones
                const arregloMonedas = monedas.monedas;
                const select = document.getElementById('criptomoneda');

                // Construir SELECT desde la REST API
                arregloMonedas.forEach(moneda => {
                    // añadir el ID y el valor, despues asignarlo al select
                    const option = document.createElement('option');
                    option.value = moneda.id;
                    option.appendChild(document.createTextNode(moneda.name));
                    select.appendChild(option);
                })
            })
    }

    mostrarMensaje(mensaje, clases){
        const div = document.createElement("div");
        div.className = clases;
        div.appendChild(document.createTextNode(mensaje));
        //div para mensajes en html
        const divMensaje = document.querySelector(".mensajes");
        //Agregamos el div a mensajes
        divMensaje.appendChild(div);

        //Desaparecer la alerta despues de haber pasado 3 segundos
        setTimeout(() => {
            document.querySelector(".mensajes div").remove();
        }, 3000);
    }

    //Imprime el resultado de la cotizacion
    mostrarResultado(resultado, moneda){
        //Eliminar el resultado anterior
        const resultadoAnterior = document.querySelector("#resultado > div");
        if (resultadoAnterior) {
            resultadoAnterior.remove();
        }

        //Muestra el spinner
        this.mostrarSpiner();

        //Construir la etiqueta de precio segun la moneda
        const etiquetaMoneda = "price_" + moneda;

        //Leer el valor del resultado
        const valor = resultado[etiquetaMoneda];

        //Convierte el resultado del texto a mayuscula 
        const monedaUpper = moneda.toUpperCase();

        //Convierte la hora de UNIX a horas y minutos
        const hora = new Date(resultado.last_updated * 1000);
        const horaActualizada = `${hora.getHours()}:${hora.getMinutes()}`;

        //Construir el Template
        let templateHTML = "";
        templateHTML += `
            <div class="card cyan darken-3">
                <div class="card-content white-text">
                    <span class="card-title">Resultado:</span>
                    <p>El precio de ${resultado.name} a moneda $ ${monedaUpper} es de: ${valor}</p>
                    <p>Última hora: ${resultado.percent_change_1h}</p>
                    <p>Último día: ${resultado.percent_change_24h}</p>
                    <p>Últimos 7 días: ${resultado.percent_change_7d}</p>
                    <p>Última Actualizacion: ${horaActualizada} horas</p>
                </div>
            </div>
        `;

        //Oculta el spinner y muestra el resultado
        setTimeout(() => {
            //imprimir el resultado
            document.querySelector("#resultado").innerHTML = templateHTML;
            
            //Ocultar el spinner
            document.querySelector(".spinner img").remove();
        }, 3000);
    }

    //Muestra un spinner cuando se cotiza
    mostrarSpiner(){
        const spinnerGif = document.createElement("img");
        spinnerGif.src = "img/spinner.gif";
        document.querySelector(".spinner").appendChild(spinnerGif);
    }
}