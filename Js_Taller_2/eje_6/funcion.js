export function esElegibleParaPrestamo(salarioAnual, puntajeCredito) {
if (salarioAnual > 30000 && puntajeCredito > 650) {
    return "Elegible para préstamo";
} else 
{
    return "No elegible para préstamo";
}
}
