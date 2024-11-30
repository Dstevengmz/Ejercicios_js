function mapfuncion(j, funcion) {
const resultado = [];
for (let i = 0; i < j.length; i++)
{
resultado.push(
        funcion(j[i], i, j));
}
    return resultado;
}
const numeros = [1, 2, 3, 4];
const cuadrados = mapfuncion(numeros, (num) => num * num);
console.log(cuadrados);
