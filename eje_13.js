function buscaPersona(arreglo, nombresBuscados) {
    return arreglo.filter(persona => nombresBuscados.includes(persona.nombre));
}

let personas = [
    { nombre: 'Juan', edad: 25 },
    { nombre: 'María', edad: 30 },
    { nombre: 'Pedro', edad: 20 },
    { nombre: 'Ana', edad: 22 }
];

let nombresBuscados = ['Pedro'];
let personasEncontradas = buscaPersona(personas, nombresBuscados);

console.log(personasEncontradas);
