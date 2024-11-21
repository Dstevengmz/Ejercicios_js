const nuevoparrafo = document.createElement("p");
nuevoparrafo.textContent = "Este es un párrafo creado dinámicamente";
document.body.appendChild(nuevoparrafo);
const btn = document.querySelector("#eliminar");
btn.addEventListener("click", () => {
    const primerp = document.querySelector("p");
    if (primerp) {
        primerp.remove(); 
    } else {
        alert("No hay párrafos para eliminar.");
    }
});
