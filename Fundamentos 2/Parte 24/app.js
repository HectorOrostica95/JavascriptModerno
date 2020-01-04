// For Loops 
for (let i = 0; i < 10; i++) {
        
    // i === 5 ? console.log('Voy en el número 5') : '';
    if (i == 5) {   console.log('Voy en el 5'); continue;}
    console.log(`Numero: ${i}`)
    
}

console.clear();

for (let i = 0; i < 10; i++) {
    if (i == 5) {   console.log('Voy en el 5'); break;}
    console.log(`Numero: ${i}`)
}

console.clear();

for (let i = 0; i < 10; i++) {
    if (i % 2 == 0 ) {   
        console.log(`El número ${i} es Par`);
    } else {
        console.log(`El número ${i} es Impar`);
    }
}

console.clear();

const arregloProductos = ['Camisa', 'Boleto', 'Guitarra', 'Disco'];

for (let i = 0; i < arregloProductos.length; i++) {
    console.log(`Tu producto ${arregloProductos[i]} fue agregado`);
}