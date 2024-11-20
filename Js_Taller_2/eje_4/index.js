import { nivelRiesgo } from './funcion.js';


const indice=parseInt(prompt("Ingrese el peso de la persona : "));
// console.log("")
const estado=(prompt(" Ingrese true si tiene emfermedades , o caso contrario false : Ingrese su opcion : "))


console.log(nivelRiesgo(indice,estado));
// console.log(nivelRiesgo(estado));  

