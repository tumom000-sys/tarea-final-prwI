let clave = "1234";
let intento;
let contador = 0;

while (contador < 3) {
    intento = prompt("Ingrese la contraseña:");

    if (intento == clave) {
        alert("Acceso concedido");
        break;
    } else {
        contador++;
        
        if (contador == 3) {
            alert("Alerta, intruso");
        } else {
            alert("Acceso denegado");
        }
    }
}