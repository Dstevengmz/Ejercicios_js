async function obtenerdatos() {
    try {
        const respuesta = await fetch('https://api.deezer.com/genre/132/artists');
        const datos = await respuesta.json();

        const artistasFiltrados = datos.data.slice(0, 5); 

        mostrar(artistasFiltrados);
    } catch (error) {
        console.error('Error al obtener los datos:', error);
    }
}
function mostrar(artistas) {
    const tabla = document.querySelector('#tabladecanciones tbody');
    tabla.innerHTML = ''; 

    artistas.forEach(artista => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${artista.name}</td>
            <td>${artista.name}</td>
            <td>No disponible</td> 
        `;
        tabla.appendChild(fila);
    });
}
obtenerdatos();
