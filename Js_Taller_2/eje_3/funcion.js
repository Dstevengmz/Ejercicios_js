export function categoriaIMC(indice){
    if(indice<18.5){
        return `Bajo peso`;
    }else if (indice>=18.5 && indice<24.9 ){
        return `Normal peso`;
    }else if (indice>=25.0 && indice<29.9){
        return `Sobre peso`;
    }
    else if(indice>30.0){
        return `Obesidad`;

    }
}