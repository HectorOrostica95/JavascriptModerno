//Funcion 
let aprendiendo;
//Forma anterior de crear la funcion
aprendiendo = function() {
    console.log("Aprendiendo Javascript");
}

//Nueva forma de crear una funcion
aprendiendo = () => {
    console.log("Aprendiendo Javascript");    
}

//En caso de que contenga una sola linea
aprendiendo = () => console.log("Aprendiendo Javascript");

//Para retornar un valor
aprendiendo = () => "Aprendiendo Javascript";

//Para retornar un Objeto
aprendiendo = () => ({aprendiendo: "Aprendiendo Javascript"});

//Pasando 1 parametro
aprendiendo = (tecnologia) => console.log("Aprendiendo " + tecnologia);

// Pasando parametros
aprendiendo = (tecno1, tecno2) => console.log("Aprendiendo " + tecno1 + " y " + tecno2);

// aprendiendo("Javascript", "ES8");

const productos = ["Disco", "Camisa", "Guitarra"];

// const letrasProductos = productos.map(function(producto){
//     return producto.length;
// });

//Utilizando arrow function
// const letrasProductos = productos.map((producto) => {
//     return producto.length;
// });

//Sintetisando codigo
// const letrasProductos = productos.map(producto => producto.length);

// console.log(letrasProductos);

// productos.forEach(function(producto){
    //     console.log(producto);
    // })
    
//Utilizando arrow funtion
productos.forEach(producto => console.log(producto));