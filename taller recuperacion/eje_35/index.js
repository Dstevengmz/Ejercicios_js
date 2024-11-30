const compañerosxd = [
    { nombre: "darwin", edad: 24, ciudad: "popayan" },
    { nombre: "palechor", edad: 23, ciudad: "popayan" },
    { nombre: "arias", edad: 32, ciudad: "popayan" }
];
const tablaa = document.querySelector("#tabla tbody");
compañerosxd.forEach(persona => 
{
const fila = document.createElement("tr");
    for(let pr in persona)
    {
        const cld = document.createElement("td");
        cld.textContent = persona[pr];
        fila.appendChild(cld);
    }
    tablaa.appendChild(fila);
});
