const array = [5, 3, 8, 1, 2, 7,3];
for (let i = 0; i < array.length; i++) {
    let numeromenor = i;
    for (let j = i + 1; j < array.length; j++) 
        {
        if (array[j] < array[numeromenor]) 
            {
            numeromenor = j;
        }
    }
    if (numeromenor !== i) 
    {
        let guardar = array[i];
        array[i] = array[numeromenor];
        array[numeromenor] = guardar;
    }
}
console.log(array); 
