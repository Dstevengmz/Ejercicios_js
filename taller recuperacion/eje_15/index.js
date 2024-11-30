const array = [1, 2, 3, 4, 5, 2, 3, 6, 7, 8, 1];
const repetidos = {};
const buscar = [];
for (let i = 0; i < array.length; i++)
{
const numero = array[i];
if (repetidos[numero]) 
{
buscar.push(numero);
} else 
{
repetidos[numero] = true;
}
}

console.log(buscar);
