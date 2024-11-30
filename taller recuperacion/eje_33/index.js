const numeroencontradoo = Math.floor(Math.random() * 100) + 1;
function adivinar() {
    const numeroingresado = parseInt(document.getElementById("nuemeroencontrado").value);
    const resultado = document.getElementById("resultado");
    if (numeroingresado === numeroencontradoo) {
        resultado.innerText = "Encontrado";
    } else if (numeroingresado < numeroencontradoo) {
        resultado.innerText = "numero muy bajo ";
    } else {
        resultado.innerText = "Dnumero muy alto";
    }
}
