let numeros = [10, 15, 42, 35, 13, 85, 22];
let suma = 0;

for (let i = 0; i < numeros.length; i++) {
    suma = suma + numeros[i];
}

document.write("La suma de los números del array es: " + suma);