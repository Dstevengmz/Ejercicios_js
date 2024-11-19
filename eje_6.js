function contarPalabras(cadena) {
let palabras = cadena.trim().split(/\s+/);
return palabras.length; 
}
let texto = "hola mundo jsjs d d";
let resultado = contarPalabras(texto);
console.log(`La cantidad de palabras en la cadena es: ${resultado}`);
