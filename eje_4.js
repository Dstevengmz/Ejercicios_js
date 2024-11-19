function encontrar() { 
    let array = [99, 2, 3, 2, 4, 5, 5, 87,90]
    let buscar = [0];
    for (let i = 0; i < array.length; i++) { 
        if (array[i] > buscar) { 
            buscar = array[i];
        }
    }
    console.log("El numero mayor es : ", buscar);
}
encontrar()