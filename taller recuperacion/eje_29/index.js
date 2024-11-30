const imagenes = ["img1.jpeg", "img2.jpeg", "img3.jpeg"];
let j = 0;
function cambiarimg(img) 
{
    if (img === "anterior") 
    {
        j = (j > 0) ? j - 1 : imagenes.length - 1;
    } else 
    {
        j = (j < imagenes.length - 1) ? j + 1 : 0;
    }
    document.getElementById("img").src = imagenes[j];
}
