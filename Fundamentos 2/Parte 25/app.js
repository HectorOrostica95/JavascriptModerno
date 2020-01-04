// While y Do While

let i = 0;

while (i < 10) {
    if (i === 5) {
        console.log('Cinco');
        i++;
        continue;
    }
    console.log(`Número: ${i}`);
    i++;
}

console.clear();

i = 0;
const musica = ['Canción 1', 'Canción 2', 'Cancion 3'];

while (i < musica.length) {
    console.log(`Reproduciendo la canción: ${musica[i]}`);
    i++;
}

console.clear();
i = 1000;

do {
    console.log(`Número: ${i}`);
    i++
} while (i < 10);