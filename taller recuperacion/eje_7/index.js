function palindromo(palabra) 
{
    const palabras = palabra.toLowerCase().replace(/\s+/g, '');
    const palabrass = palabras.split('').reverse().join('');
    return palabras === palabrass;
}

console.log(palindromo("ana"));
console.log(palindromo("hola"));
console.log(palindromo("Anita lava la tina"));
