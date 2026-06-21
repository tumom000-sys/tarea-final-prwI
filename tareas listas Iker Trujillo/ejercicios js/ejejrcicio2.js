let numero = prompt("Ingrese un número entero de 6 cifras");

let c1 = parseInt(numero[0]);
let c2 = parseInt(numero[1]);
let c3 = parseInt(numero[2]);
let c4 = parseInt(numero[3]);
let c5 = parseInt(numero[4]);
let c6 = parseInt(numero[5]);

let sumaCentro = c3 + c4;
document.write("Suma de las cifras del centro: " + sumaCentro + "<br>");

let multiplicacionExtremos = c1 * c6;
document.write("Multiplicación de los extremos: " + multiplicacionExtremos + "<br>");

let resta = c5 - c2;
document.write("Resta de la quinta menos la segunda cifra: " + resta);