let digito1 = parseInt(prompt("Escribe el primer dígito"));

if (digito1 % 2 === 0) {

    alert("Hay una aeronave en el aire.");

    let digito2 = parseInt(prompt("Escribe el segundo dígito"));

    if (digito2 === 1) {
        alert("Avión Militar");
    } else if (digito2 === 2) {
        alert("Avión civil de carga");
    } else if (digito2 === 3) {
        alert("Avión civil de pasajeros");
    } else if (digito2 === 4) {
        alert("Aeronave sin permiso");
    } else if (digito2 === 5) {
        alert("Aeronave de supertransporte");
    } else if (digito2 === 6) {
        alert("Aeronave enemiga");
    } else if (digito2 === 7) {
        alert("Avión mixto");
    } else if (digito2 === 8) {
        alert("Helicóptero");
    } else if (digito2 === 9) {
        alert("Globo aerostático");
    } else if (digito2 === 0) {
        alert("Dirigible");
    } else {
        alert("Aeronave no registrada");
    }

    let kilometros = parseInt(prompt("Escribe el tercer dígito"));
    alert("La distancia es: " + kilometros + " kilómetros");

    let digito4 = parseInt(prompt("Escribe el cuarto dígito"));

    if (digito4 === 0 || digito4 === 1) {
        alert("Dirección: Norte");
    } else if (digito4 === 2 || digito4 === 3) {
        alert("Dirección: Sur");
    } else if (digito4 === 4 || digito4 === 5) {
        alert("Dirección: Oriente");
    } else if (digito4 === 6 || digito4 === 7) {
        alert("Dirección: Occidente");
    } else {
        alert("Dirección desconocida");
    }

} else {
    alert("No hay aeronaves en el aire. Operación cancelada.");
}