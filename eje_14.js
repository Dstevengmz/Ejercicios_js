function eliminarPersonasPorNombres(arreglo, nombresAEliminar) {
    return arreglo.filter(persona => !nombresAEliminar.includes(persona.nombre));
}
let personas = [
    { nombre: 'Juan', edad: 25 },
    { nombre: 'María', edad: 30 },
    { nombre: 'Pedro', edad: 20 },
    { nombre: 'Ana', edad: 22 }
];
let nombresAEliminar = ['María', 'Pedro','Juan'];
let personasActualizadas = eliminarPersonasPorNombres(personas, nombresAEliminar);
console.log(personasActualizadas);
