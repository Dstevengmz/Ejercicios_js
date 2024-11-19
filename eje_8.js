function removerDuplicados(arreglo) {
    let arregloSinDuplicados = [];
    for (let i = 0; i < arreglo.length; i++) {
        if (!arregloSinDuplicados.includes(arreglo[i])) {
            arregloSinDuplicados.push(arreglo[i]);
        }
    }
    return arregloSinDuplicados;
}
let arreglo = [1,1,1,1,1,1, 2, 3, 2, 4, 4, 5, 6, 6, 7, 8, 8, 9];
let resultado = removerDuplicados(arreglo);
console.log(`El arreglo sin duplicados es: ${resultado}`);
