// Event listener click 
/*
document.querySelector('#submit-buscador').addEventListener('click', function(e){
    e.preventDefault();
    alert('Buscando Cursos');
})  */


// Otra forma de realizar lo mismo es de la siguiente manera
document.querySelector('#submit-buscador').addEventListener('click', ejecutarBoton)

function ejecutarBoton(e) {
    e.preventDefault();
    console.log('Desde la función ejecuta botón');

    let elemento;

    elemento = e;
    console.log(elemento)

    elemento = e.target;
    console.log(elemento)
    
    elemento = e.target.id;
    console.log(elemento)

    elemento = e.target.className;
    console.log(elemento)

    elemento = e.target.innerText;
    console.log(elemento)
}

console.clear();

document.querySelector('#encabezado').addEventListener('click', function(e) {
    // e.target.innerText = 'Nuevo Encabezado'
    e.target.innerText = 2 + 2
    console.log(e.target.innerText)
});