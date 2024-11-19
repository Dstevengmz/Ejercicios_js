function filtrarPorPropiedad(arreglo, propiedad) {
    const resultado = [];
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i][propiedad] !== undefined) {
            resultado.push(arreglo[i]);
        }
    }

    return resultado; 
}
const arregloEjemplo = [
    { nombre: "Alice", edad: 25 },
    { nombre: "Bob" },
    { nombre: "Charlie", edad: 30 },
    { nombre: "darwin", edad: 32 }
];
const resultado = filtrarPorPropiedad(arregloEjemplo, "nombre");
console.log(resultado);
