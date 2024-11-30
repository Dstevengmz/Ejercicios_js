const maximo = 10;
const arrayaleatorio = [];
for (let i = 0; i < maximo; i++) {
    const numeros = Math.floor(Math.random() * 100) + 1;
    arrayaleatorio.push(numeros)
}
console.log(arrayaleatorio)
