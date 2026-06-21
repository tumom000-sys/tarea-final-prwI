let a = parseFloat(prompt("Valor de a"));
let b = parseFloat(prompt("Valor de b"));
let c = parseFloat(prompt("Valor de c"));

let disc = (b ** 2) - (4 * a * c);

if (disc > 0) {
    let x1 = (-b + Math.sqrt(disc)) / (2 * a);
    let x2 = (-b - Math.sqrt(disc)) / (2 * a);

    document.write("Solución 1: " + x1);
    document.write("<br>");
    document.write("Solución 2: " + x2);

} else if (disc == 0) {
    let x = (-b) / (2 * a);

    document.write("Solo hay una solución: " + x);

} else {
    document.write("La solución incluye números imaginarios");
}