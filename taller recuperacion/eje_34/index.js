function agregar()
{
const tareaingresada = document.getElementById("tarean");
const tarea = tareaingresada.value;
if (tarea === "") return;
const ul = document.getElementById("listar");
const li = document.createElement("li");
li.textContent = tarea;
const eliminar = document.createElement("button");
eliminar.textContent = "Eliminar";
eliminar.onclick = function()
{
    li.remove();
};
const agregada = document.createElement("button");
agregada.textContent = "Completada";
agregada.onclick = function()
{
    li.style.textDecoration = "line-through";
};
li.appendChild(eliminar);
li.appendChild(agregada);
ul.appendChild(li);
tareaingresada.value = ""; 
}