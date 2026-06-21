let opcion = parseInt(prompt("1. Millas\n2. Kilómetros\n3. Metros"));
let cantidad = parseFloat(prompt("Digite la distancia"));

switch (opcion) {

    case 1:
        document.write(cantidad + " millas equivalen a " +
                       (cantidad * 1.6093) + " kilómetros y " +
                       (cantidad * 1609.34) + " metros");
        break;

    case 2:
        document.write(cantidad + " kilómetros equivalen a " +
        (cantidad * 0.621371) + " millas y " +
        (cantidad * 1000) + " metros");
        break;

    case 3:
        document.write(cantidad + " metros equivalen a " +
                       (cantidad / 1000) + " kilómetros y " +
                       (cantidad * 0.000621371) + " millas");
        break;

    default:
        document.write("Valor incorrecto");
}