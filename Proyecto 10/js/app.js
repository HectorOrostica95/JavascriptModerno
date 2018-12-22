const Cotizador = new API("cc18a91263ac1acbbba33ea2e014b683778eb358786d7db2211dd7667765ee73");
const ui = new Interfaz();


//Leer el formulario
const formulario = document.querySelector("#formulario"); 

//Event listener
formulario.addEventListener("submit",(e)=>{
    e.preventDefault();

    //Leer la moneda seleccionada
    const monedaSelec = document.querySelector("#moneda");
    const monedaSeleccionada = monedaSelec.options[monedaSelec.selectedIndex].value;

    //Leer la criptomoneda seleccionada
    const criptoMonedaSelec = document.querySelector("#criptomoneda");
    const criptoMonedaSeleccionada = criptoMonedaSelec.options[criptoMonedaSelec.selectedIndex].value;

    //Comprobar que ambos campos tengan algo seleccionado
    if(criptoMonedaSeleccionada === "" || monedaSeleccionada === ""){
        //arrogar un mensaje de error
        ui.mostrarMensaje("Ambos campos son obligatorios", "alert bg-danger text-center");
    } else {
        //Consultar la API
        Cotizador.obtenerValores(monedaSeleccionada, criptoMonedaSeleccionada)
            .then((data) => {
                ui.mostrarResultado(data.resultado.RAW, monedaSeleccionada, criptoMonedaSeleccionada)
            }).catch((err) => {
                
            });
    }
});