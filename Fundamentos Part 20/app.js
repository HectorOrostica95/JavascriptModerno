//MAPS

// let cliente = new Map();

// cliente.set('nombre', 'Hector');
// cliente.set('tipo', 'Premium');
// cliente.set('saldo', 3000);

// console.log(cliente.get('nombre'));
// console.log(cliente.get('tipo'));
// console.log(cliente.get('saldo'));

//Metodos de los maps 
//Tamaños de los map
// console.log(cliente.size);
//Si queremos comprobar un valor si existe
// console.log(cliente.has('apellido'));
// console.log(cliente.has('tipo'));
//Para borrar un elemento del maps
// cliente.delete('nombre');
// console.log(cliente);
//Para borrar todo el contenido
// cliente.clear()
// console.log(cliente);


//Ejemplo
const paciente = new Map(
    [['nombre', 'paciente'],
    ['habitacion', 'No definida']]
);

paciente.set('nombre', 'Francisco');
paciente.set('habitacion', 350);


paciente.forEach((datos, index) => {
    console.log(`${index} : ${datos}`);
});


console.log(paciente);