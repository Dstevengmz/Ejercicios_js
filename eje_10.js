function buscarIndice(arreglo, valorBuscado) {
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] === valorBuscado) {
            return i;
        }
    }
    return -1;
}
let arreglo = [10, 20, 30, 40, 50];
let valorBuscado = 40;
let indice = buscarIndice(arreglo, valorBuscado);
console.log(`El índice del valor ${valorBuscado} es: ${indice}`);
