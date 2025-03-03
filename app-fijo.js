let numeroInicial = 3;
let numeroMinimo = 0;
let numeroMaximo = 10;
let numeroJugador = 0;
let i = 3;


while (numeroInicial != numeroJugador) {
    numeroJugador = prompt (`Adivina el número secreto entre ${numeroMinimo} y ${numeroMaximo}`);
    if (numeroInicial == numeroJugador){
        alert (`Felicitaciones, el número secreto es ${numeroInicial}`);
    } else {
        alert (`Te quedan ${(i-1)}, intentos`);
        i--;
        } 
    if (i == 0) {
        alert (`Perdiste, el número secreto era ${numeroInicial}`);
        break;
    }
}