document.getElementById("formulario").addEventListener("submit", function(event) {
event.preventDefault();
const email = document.getElementById("correo").value;
const error = document.getElementById("errorcorreo");
const errorcorreo = /\S+@\S+\.\S+/;

if (!errorcorreo.test(email)) 
{
    error.style.display = "block";
} else 
{
    error.style.display = "none";
    alert("Exitoso el correo");
}
});
