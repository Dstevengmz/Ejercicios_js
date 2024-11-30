const array = ["manzana", "platano", "manzana", "pera", "manzana", "uva","zandia"];
const repetir = "manzana";
let contador = 0;
for (let i = 0; i < array.length; i++) 
{
    if (array[i] === repetir) 
    {
        contador++;
    }
}
console.log(contador)
