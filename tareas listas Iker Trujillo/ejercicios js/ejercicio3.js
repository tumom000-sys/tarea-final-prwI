let hora = parseInt(prompt("Ingrese la hora"));
let minuto = parseInt(prompt("Ingrese los minutos"));
let segundo = parseInt(prompt("Ingrese los segundos"));

segundo++;

if (segundo == 60) {
    segundo = 0;
    minuto++;
}

if (minuto == 60) {
    minuto = 0;
    hora++;
}

if (hora == 24) {
    hora = 0;
}

document.write("Nueva hora: " + hora + ":" + minuto + ":" + segundo);