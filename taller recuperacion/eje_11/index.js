function mayor(array, numero) {
    return array.filter(num => num > numero);
}
const array = [1, 5, 10, 15, 20, 25];
const numerodado = 10;
const resultado = mayor(array, numerodado);
console.log(resultado);
