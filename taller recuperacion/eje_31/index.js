function contadorletras(str)
{
    const frecuenciadecadaclase = {};
    for (let i of str) 
        {
        if (frecuenciadecadaclase[i]) 
            {
            frecuenciadecadaclase[i]++;
        } else {
            frecuenciadecadaclase[i] = 1;
        }
    }
    return frecuenciadecadaclase;
}
console.log("Resultado")
console.log(contadorletras("banana"));
