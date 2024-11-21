function prueba(){
    const nuevo = document.createElement("div");
nuevo.textContent = "este es un nuevo div";

const original = document.querySelector("div");
original.parentNode.replaceChild(nuevo, original);
console.log("el div original fue reemplazado por:", nuevo.textContent);
}

prueba()