let numeros = [];
let numero;
let pares = 0;
let impares = 0;

while (true) {
    numero = parseInt(prompt("Ingrese un número:"));

    if (isNaN(numero) || numero === 0) {
        break;
    }

    numeros.push(numero);

    if (numero % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}

document.write("Array: ");
document.write(numeros);
document.write("<br>");

document.write("Cantidad de números pares: " + pares);
document.write("<br>");

document.write("Cantidad de números impares: " + impares);