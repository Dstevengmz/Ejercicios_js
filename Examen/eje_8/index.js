const elementos = [
{ nombre: "manzanas", descripcion: "producto1" },
{ nombre: "peras", descripcion: "producto2" },
{ nombre: "naranjas", descripcion: "producto3" },
{ nombre: "mandarinas", descripcion: "producto4" },
];

function creartarjeta(elementos) {
return elementos
    .map((objeto) => {
    return `
        <div class="tarjeta">
        <h3>${objeto.nombre}</h3>
        <p>${objeto.descripcion}</p>
        </div>
        `;
    }).join("");
}

    function campodelatarjeta(elementos, contenedor) {
    const html = creartarjeta(elementos);
    contenedor.innerHTML = html;
    }

    const contenedor = document.getElementById("tarjetas");

    campodelatarjeta(elementos, contenedor);
