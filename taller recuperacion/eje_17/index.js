const array = [1, 2, 3, 4, 5, 2, 3, 6, 7, 8, 1,2,3,1,2,4,3,2];
const arrayvacio = [];
for (let i = 0; i < array.length; i++) 
{
    if (!arrayvacio.includes(array[i])) 
    {
        arrayvacio.push(array[i]);
    }
}
console.log(arrayvacio);
