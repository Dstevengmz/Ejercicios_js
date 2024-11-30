const array = [3, 5, 7, 2, 8, 1, 9,2323];
let numeromaximo = array[0]; 
for (let i = 1; i < array.length; i++) {
    if (array[i] > numeromaximo) {
        numeromaximo = array[i];
    }
}
console.log(numeromaximo); 
