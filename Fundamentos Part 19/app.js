let carrito = new Set();
carrito.add("Camisa");
carrito.add("Disco #1");
carrito.add("Disco #2");
carrito.add("Disco #3");
carrito.add("Disco #4");


// console.log(carrito);
// console.log(carrito.size);

let numeros = new Set([1,2,3,4,5,6,7,1,2,3,4]);
// console.log(numeros);

//Para eliminar un elemento del set o todos los datos del set

// carrito.delete("Camisa");
// carrito.clear();

carrito.forEach((producto, index) => {
    // console.log(producto);
    // console.log(`${index} : ${producto}`);
});

//como convertir un set a un arreglo 
const arregloCarrito=[...carrito];
console.log(arregloCarrito);

