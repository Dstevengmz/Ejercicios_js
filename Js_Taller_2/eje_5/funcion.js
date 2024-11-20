export function esBisiesto(año) {
    if (año % 4 === 0) {
    if (año % 100 === 0) {
        if (año % 400 === 0) {
            return "Es bisiesto";
            } else {
            return "No es bisiesto";
            }
        } else {
        return "Es bisiesto";
        }
    } else {
    return "No es bisiesto";
    }
}
