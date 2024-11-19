function agregarPersona(arreglo, nuevaPersona) {
    arreglo.push(nuevaPersona);
}
let personas = [
    { nombre: 'Juan', edad: 25 },
    { nombre: 'María', edad: 30 },
    { nombre: 'Pedro', edad: 10 },
    { nombre: 'Ana', edad: 17 }
];
let nuevaPersona = { nombre: 'Luis', edad: 20 };
agregarPersona(personas, nuevaPersona);
console.log("Persona agregada al arreglo :", personas);
