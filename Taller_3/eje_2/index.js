function probando(){
    const link=document.getElementsByTagName("a")[0];
    link.setAttribute("href","https://www.google.com");
    link.textContent="gOOGLE";
    const titulo=document.querySelector(".titulo");
    titulo.textContent="titulo  modificado";
    document.body.style.backgroundColor="#f0e68c";

}

probando()