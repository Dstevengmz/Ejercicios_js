function transformarMayusculas(nombres) {
    return nombres.map(nombre => nombre.toUpperCase());
}
let nombres = ["Carlos", "Ana", "Juan", "Maria"];
let nombresMayusculas = transformarMayusculas(nombres);
console.log(nombresMayusculas);
