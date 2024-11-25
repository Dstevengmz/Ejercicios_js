const contenedorPokemon = document.querySelector(".contenedor-pokemon");

function obtenerPokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then((respuesta) => respuesta.json())
        .then((datos) => {
            crearTarjetaPokemon(datos);
        })
        .catch((error) => console.error("Error al obtener el Pokémon:", error));
}

function obtenerPokemones(cantidad) {
    for (let i = 1; i <= cantidad; i++) {
        obtenerPokemon(i);
    }
}

function crearTarjetaPokemon(pokemon) {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta-pokemon");

    const contenedorImagen = document.createElement("div");
    contenedorImagen.classList.add("contenedor-imagen");

    const imagen = document.createElement("img");
    imagen.src = pokemon.sprites.front_default;
    imagen.alt = `Imagen de ${pokemon.name}`;
    contenedorImagen.appendChild(imagen);

    const numero = document.createElement("p");
    numero.textContent = `#${pokemon.id.toString().padStart(3, "0")}`;

    const nombre = document.createElement("p");
    nombre.classList.add("nombre");
    nombre.textContent = pokemon.name;

    tarjeta.appendChild(contenedorImagen);
    tarjeta.appendChild(numero);
    tarjeta.appendChild(nombre);

    contenedorPokemon.appendChild(tarjeta);
}

obtenerPokemones(40);
