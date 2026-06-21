let temp;
let menores = 0;
let ceros = 0;
let mayores = 0;

temp = prompt("Ingrese temperatura");

while (temp != 99 && temp != -99) {

    if (temp < 0) {
        menores++;
    } else if (temp == 0) {
        ceros++;
    } else {
        mayores++;
    }

    temp = prompt("Ingrese temperatura");
}

document.write("Menores que 0: " + menores + "<br>");
document.write("Iguales a 0: " + ceros + "<br>");
document.write("Mayores que 0: " + mayores);