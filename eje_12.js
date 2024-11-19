const calcularPromedio = (arreglo) => {
    let suma = 0;
    for (let i = 0; i < arreglo.length; i++) {
        suma += arreglo[i];
    }
    let promedio = suma / arreglo.length;
    return promedio;
}

let arreglo = [10, 20, 30, 40, 50];
let promedio = calcularPromedio(arreglo);
console.log(`El promedio es: ${promedio}`);
