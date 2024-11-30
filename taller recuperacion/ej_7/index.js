function espalindromo(palabra) {
    const palabras = palabra.toLowerCase().replace(/\s+/g, '');
    const palabrass = palabras.split('').reverse().join('');
    return palabras === palabrass;
}
console.log(espalindromo("ana"))
console.log(espalindromo("hola"))  
console.log(espalindromo("Anita lava la tina"))
