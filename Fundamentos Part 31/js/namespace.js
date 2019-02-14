const restaurApp = {};

restaurApp.platillos = [
    {
        platillo: 'Pizza',
        precio: 25,
    },
    {
        platillo: 'Hot dog',
        precio: 10,
    },
    {
        platillo: 'Completo',
        precio: 20,
    },
    {
        platillo: 'Papas fritas',
        precio: 15,
    },
];

//Funciones

restaurApp.funciones = {
    ordenar: id => {
        console.log(`Tu platillo: ${restaurApp.platillos[id].platillo} se esta preparando`);
    },
    agregarPlatillo: (platillo, precio) => {
        const nuevo = {
            platillo, 
            precio
        }
        restaurApp.platillos.push(nuevo);
    },
    mostrarMenu: platillos => {
        console.log(`Bienvenidos a nuestro menú: `);
        platillos.forEach( (platillo, index) => {
            console.log(`${index} : ${platillo.platillo} $ ${platillo.precio}`);
            
        });

    }
}

console.log(restaurApp)
const {platillos} = restaurApp;
restaurApp.funciones.mostrarMenu(platillos);
restaurApp.funciones.ordenar(0);

restaurApp.funciones.agregarPlatillo('Pastel de choclo', 20);
restaurApp.funciones.mostrarMenu(platillos);
