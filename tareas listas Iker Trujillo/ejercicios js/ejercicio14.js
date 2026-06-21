let x = parseInt(prompt("Ingrese X"));
let n = parseInt(prompt("Ingrese N"));

let suma = 0;
let i = 1;

while (i <= n) {

    let potencia = x ** (2 * i);

    suma = suma + (potencia / (2 * i));

    i++;
}

document.write("La suma es: " + suma);