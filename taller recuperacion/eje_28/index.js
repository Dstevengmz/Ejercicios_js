let segundos = 10;
const tiempoo = document.getElementById("tiempo");
const cuentaconteo = setInterval(
    function()
    {
    segundos--;
    tiempoo.innerText = segundos;
    if (segundos <= 0) 
    {
        clearInterval(cuentaconteo);
        alert("el tiempo lelgo  a 0");
    }
}, 1000)