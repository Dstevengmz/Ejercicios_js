function pares() {
    let contador = 0;
    fdsd = [3,2,2,2]
    for (let i = 0; i < fdsd.length; i++) { 
        if (fdsd[i] % 2 == 0) {
            contador = contador + 1;
        }
    }
    console.log("Los numero pares que hay son :", contador);
}
pares()