var a = 'a';
let b = 'b';
const c = 'c';

//Scope de la función
function funcionScope(){
    var a = 'A';
    let b = 'B';
    const c = 'C';
    console.log('Función: ' + a,b,c)
}
funcionScope();

//Scope de bloque 
if (true) {
    var a = 'AA';
    let b = 'BB';
    const c = 'CC';
    console.log('Bloque: ' + a,b,c)
}

//For 
// al usar el var, es reemplazado en las variables globales
for (var a = 0; a < 10; a++) {
    console.log(a);    
}

// Al usar let este no es reemplazado en las variables globales 
for (let b = 0; b < 10; b++) {
    console.log(b);    
}

console.log('Globales: ' + a,b,c)