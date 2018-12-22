//Intanciar ambas clases
const eventbrite = new EventBrite();
const ui = new Interfaz();

//Listener al buscador
document.getElementById("buscarBtn").addEventListener("click", (e) =>{
    e.preventDefault();

    //Leer el texto del input buscar
    const textoBuscador = document.getElementById("evento").value;

    //Leer el select
    const categorias = document.getElementById("listado-categorias");
    const categoriaSeleccionada = categorias.options[categorias.selectedIndex].value;

    //Revisar que haya algo escrito en el buscador 
    if (textoBuscador !== "") {
        eventbrite.obtenerEventos(textoBuscador, categoriaSeleccionada)
        .then((eventos) => {
            if (eventos.eventos.events.length > 0){
                //Limpiar resultados 
                ui.limpiarResultados();

                //Si hay eventos mostrar eventos
                ui.mostrarEventos(eventos.eventos);

            } else {
                //No hay eventos, enviar una alerta
                ui.mostrarMensaje("No hay resultados", "alert alert-danger mt-4");
            }
        }).catch((err) => {
            
        });
    } else {
        //Mostar mensaje para que imprima algo 
        ui.mostrarMensaje("Escribe algo en el buscador", "alert alert-danger mt-4");
    }
})