export  function calcularDescuento (precio){
    let descuento=20;
    let total;
    if(precio >1000){
        total=precio-(precio*(descuento/100))
        return `El valor es ${total}`
    }else if(precio>500 && precio<=1000){
        let descuento =10;
        total=precio-(precio*(descuento/100))
        return `El valor es ${total}`

    } else if(precio<500){
        total=precio;
        alert("No tienes decuento ")
        return `El valor es ${total}`

    }
}