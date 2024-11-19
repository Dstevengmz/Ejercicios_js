function arregloAParesAObjeto(arreglo) {
    const objeto = {};
    for (let i = 0; i < arreglo.length; i++) {
        const par = arreglo[i];
        objeto[par[0]] = par[1];
    }
    return objeto;
}
const pares = [['nombre', 'Alice'], ['edad', 25], ['ciudad', 'Madrid']];
const resultado = arregloAParesAObjeto(pares);
console.log(resultado);