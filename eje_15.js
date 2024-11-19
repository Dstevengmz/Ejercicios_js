function filtrarmayoresdeedad(arreglo) {
    return arreglo.filter(persona => persona.edad >= 18);
}

let personas = [
    { nombre: 'Juan', edad: 25 },
    { nombre: 'María', edad: 30 },
    { nombre: 'Pedro', edad: 10 },
    { nombre: 'Ana', edad: 17 }
];

let personasMayores = filtrarmayoresdeedad(personas);

console.log( "Las personas mayores de edad : ",personasMayores);
