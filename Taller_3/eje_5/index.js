const click = document.getElementById("click");

function showAlert() {
    alert("boton clickeado");
}

click.addEventListener("click", showAlert);

const eliminarbtn = document.getElementById("eliminar");

eliminarbtn.addEventListener("click", () => {
    click.removeEventListener("click", showAlert);
    alert("el evento del boton 'presionname' ha sido eliminado");
});
