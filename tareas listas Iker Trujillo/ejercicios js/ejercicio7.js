let ajedrez = 0;
let atletismo = 0;
let futbol = 0;
let gimnasia = 0;
let natacion = 0;
let opcion;

for (let i = 1; i <= 10; i++) {
    opcion = parseInt(prompt(
        "Persona " + i +
        "\nSeleccione el deporte que practica:" +
        "\n1. Ajedrez" +
        "\n2. Atletismo" +
        "\n3. Fútbol" +
        "\n4. Gimnasia" +
        "\n5. Natación"
    ));

    switch(opcion){
        case 1:
            ajedrez++;
            break;
        case 2:
            atletismo++;
            break;
        case 3:
            futbol++;
            break;
        case 4:
            gimnasia++;
            break;
        case 5:
            natacion++;
            break;
        default:
            alert("Opción no válida");
            i--;
            break;
    }
}

document.write("Cantidad de personas por deporte:<br>");
document.write("Ajedrez: " + ajedrez + "<br>");
document.write("Atletismo: " + atletismo + "<br>");
document.write("Fútbol: " + futbol + "<br>");
document.write("Gimnasia: " + gimnasia + "<br>");
document.write("Natación: " + natacion + "<br>");