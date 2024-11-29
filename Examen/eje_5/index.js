let comida =
    [
"arroz",
"huevos",
"atun",
"papas",
"platano"
];
const listaelementos = document.getElementById("lista");

function opciones()
{
listaelementos.innerHTML = comida
    .map((i, j) => `
    <li>
    <span>${i}</span>
    <button onclick="eliminartarea(${j})">x</button>
    </li>`).join("");
}

function eliminartarea(j)
{
comida.splice(j, 1); 
opciones(); 
}

opciones();
