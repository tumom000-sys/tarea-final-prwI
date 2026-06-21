let numero;
let contador = 0;

while (true) {
    numero = parseInt(prompt("Ingresa un número par:"));

    if (numero % 2 === 0) {
        contador++;
    } else {
        break;
    }
}

alert("Ingresaste " + contador + " números pares.");