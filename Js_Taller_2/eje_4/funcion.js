export function nivelRiesgo(edad,estado){
if(edad>60 || estado==true){
    return `Alto riesgo`; 
}
else if (edad>40 && edad<=60 && estado==true){
    return `Riesgo moderado`; }
else{
    return `Bajo riesgo`; 
}
}