let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

let numero = parseInt(prompt("Ingrese un número entre 1 y 7"));

if (numero >= 1 && numero <= 7) {
    document.write("El día es: " + dias[numero - 1]);
} else {
    document.write("Número no válido");
}