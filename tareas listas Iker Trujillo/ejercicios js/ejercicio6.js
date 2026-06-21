let tipo1, tipo2, tipo3;
let totalHuevos, subtotal;
let descuento = 0;
let clienteFrecuente;
let dia;

tipo1 = parseInt(prompt("¿Cuántos huevos A vas a comprar?"));
tipo2 = parseInt(prompt("¿Cuántos huevos AA vas a comprar?"));
tipo3 = parseInt(prompt("¿Cuántos huevos AAA vas a comprar?"));

clienteFrecuente = parseInt(prompt("¿Eres cliente frecuente?\n1. Sí\n2. No"));

dia = parseInt(prompt(
"Ingresa el día de la compra:\n" +
"1. Lunes\n" +
"2. Martes\n" +
"3. Miércoles\n" +
"4. Jueves\n" +
"5. Viernes\n" +
"6. Sábado\n" +
"7. Domingo"
));

subtotal = (tipo1 * 600) + (tipo2 * 700) + (tipo3 * 750);

totalHuevos = tipo1 + tipo2 + tipo3;

if (totalHuevos >= 30 && totalHuevos <= 45) {
    descuento = subtotal * 0.10;
}
else if (totalHuevos >= 46 && totalHuevos <= 70) {
    descuento = subtotal * 0.15;
}
else if (totalHuevos >= 71 && totalHuevos <= 100) {
    descuento = subtotal * 0.20;
}
else if (totalHuevos > 100) {
    descuento = subtotal * 0.25;
}

if (clienteFrecuente == 1) {
    descuento = descuento + (subtotal * 0.025);
}

let totalFinal = subtotal - descuento;

switch(dia){
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        totalFinal = totalFinal + (totalFinal * 0.05);
        break;

    case 6:
        totalFinal = totalFinal - (totalFinal * 0.05);
        break;

    case 7:
        totalFinal = totalFinal;
        break;

    default:
        alert("Día no válido");
        break;
}

document.write("TOTAL DE HUEVOS: " + totalHuevos);
document.write("<br>");
document.write("SUBTOTAL: $" + subtotal);
document.write("<br>");
document.write("DESCUENTO: $" + descuento);
document.write("<br>");
document.write("TOTAL A PAGAR: $" + totalFinal);
