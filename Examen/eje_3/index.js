function Ejercicio_3() {
const botoncentral = document.getElementById("botons");

const botones = Array.from({ length: 5 }, (_, i) => {
    const btn = document.createElement("button");
    btn.textContent = `El boton ${i + 1}`;
    btn.dataset.i = i;
    return btn;
});

botones.forEach((btn) => botoncentral.appendChild(btn));

botones.forEach((btn) => {
    btn.addEventListener("click", () => {
        const i = btn.dataset.i;
        aumentar = i + 1
        
    console.log(`Boton :${i}`);
    });
});
}
Ejercicio_3();
