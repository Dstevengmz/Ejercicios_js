const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
function funcionelementos(array1, array2)
{
    const comunes = [];
    for (let i = 0; i < array1.length; i++)
        {
        if (array2.includes(array1[i]))
            {
        comunes.push(array1[i]);
        }
    }
    return comunes;
}
const resultado = funcionelementos(array1, array2);
console.log(resultado); 