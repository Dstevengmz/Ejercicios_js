function reemplazarElementos(arreglo, cambios) {
for (let i = 0; i < cambios.length; i++) {
    let valorViejo = cambios[i][0];
    let valorNuevo = cambios[i][1];

    for (let j = 0; j < arreglo.length; j++) {
    if (arreglo[j] === valorViejo) {
        arreglo[j] = valorNuevo;
    }
    }
}
}
let arreglo = [10, 20, 30, 40, 50];
let cambios = [
[30, 99],
[40, 11],
[50, 12],
];
reemplazarElementos(arreglo, cambios);
console.log(arreglo);
