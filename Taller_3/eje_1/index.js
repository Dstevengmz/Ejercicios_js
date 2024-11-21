const infoid=document.getElementById("info");
console.log(infoid.textContent);

const detalle =document.querySelector(".detalle");
detalle.textContent=`este es un detalle modificado`;


const parrafocolor=document.querySelectorAll("p");
parrafocolor.forEach(e=>{
    e.style.backgroundColor="lightblue";
})