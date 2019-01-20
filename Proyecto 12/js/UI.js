class UI {
    constructor() {
        //Instanciar la API
        this.api = new API();

        // Crear los markers con LayerGroup
        this.markers = new L.LayerGroup(); 

        // Iniciar el mapa
        this.mapa = this.inicializarMapa();
    }

    inicializarMapa() {
        // Inicializar y obtener la propiedad del mapa
        const map = L.map('mapa').setView([19.390519, -99.3739778], 6);
        const enlaceMapa = '<a href="http://openstreetmap.org">OpenStreetMap</a>';

        L.tileLayer(
            'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; ' + enlaceMapa + ' Contributors',
            maxZoom: 18,
            }).addTo(map);

        return map;
    }

    mostrarEstablecimientos() {
        this.api.obtenerDatos()
        .then((datos) => {
            const resultado = datos.respuestaJSON.results;

            //Ejecuta la funcion mostrar pines 
            this.mostarPines(resultado);
        });
    }

    mostarPines(datos){
        //Limpiar los markers
        this.markers.clearLayers();

        //Recorrer los establecimientos
        datos.forEach(dato => {
            // Destucturing 
            const {latitude, longitude, calle, regular, premium} = dato;

            //Crera popUp
            const opcionesPopUp = L.popup()
                .setContent(`   <p>Calle: ${calle}</p>
                                <p><b>Regular:</b> $ ${regular}</p>
                                <p><b>Premium:</b> $ ${premium}</p>
                `);
            //Agregar el pin
            const marker = new L.marker([
                parseFloat(latitude),
                parseFloat(longitude)
            ]).bindPopup(opcionesPopUp);
            this.markers.addLayer(marker); 
        });
        this.markers.addTo(this.mapa)
    }

    //Buscador
    obtenerSugerencias(busqueda){
        this.api.obtenerDatos()
        .then((datos) => {
            const resultados = datos.respuestaJSON.results;

            //Envia el JSON y la busqueda para el filtrado
            this.filtrarSugerencias(resultados, busqueda);
            
        });
    }
    //Filtra las sugerencias en base al input

    filtrarSugerencias(resultado, busqueda){
        //filtra con .filter
        const filtro = resultado.filter(filtro => filtro.calle.indexOf(busqueda) !== -1)

        //Mostrar pines
        this.mostarPines(filtro);

    }
}