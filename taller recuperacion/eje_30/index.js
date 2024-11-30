const elemento = document.getElementById("elemento");

document.addEventListener("mousemove", function(event) {
    elemento.style.left = event.pageX + "px";
    elemento.style.top = event.pageY + "px";
});
