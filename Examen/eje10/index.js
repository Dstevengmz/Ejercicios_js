const img = [
    'rg4.jpg',
    'rg4.jpg',
    'rg4.jpg',
    'rg4.jpg'
];

const traer = document.getElementById('imagenes');
let contador = 0;

img.forEach(i => {
    const elemento = document.createElement('img');
    elemento.src = i;
    traer.appendChild(elemento);
});

function pasarimagen() {
    const imgs = img.length;
    contador = (contador + 1) % imgs; 
    traer.style.transform = `translateX(-${contador * 100}%)`;
}
setInterval(pasarimagen, 5000);
