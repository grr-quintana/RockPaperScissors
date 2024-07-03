function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function eleccion(jugada) {
    let resultado = ""
    if(jugada == 1) {
        resultado = "Piedra ✊"
    } else if(jugada == 2) {
        resultado = "Papel ✋"
    } else if(jugada == 3) {
        resultado = "Tijera ✌"
    } else {
        resultado = "Por curioso te llevaré a la derrota"
    }
    return resultado
}
// 1 es piedra, 2 es papel y 3 es tijera.
let jugador = 0
let pc = 0
let triunfos = 0
let perdidas = 0

while (triunfos < 3 && perdidas < 3) {
    pc = aleatorio(1, 3)
    jugador = prompt("Elige: 1 para piedra, 2 para papel y 3 para tijera.")
    //alert("Elegiste " + jugador)

    alert("PC elige " + eleccion(pc))
    alert("Tú eliges " + eleccion(jugador))

    //COMBATE
    if(jugador - pc == 1 || jugador - pc == -2) {
        alert("Ganaste 😃")
        triunfos = triunfos + 1
    } else if(jugador - pc == -1 || jugador - pc == 2){
        alert("Perdiste 😟")
        perdidas = perdidas + 1
    } else{
        alert("Empate")
    }
}

alert("Ganaste " + triunfos + " veces. Perdiste " + perdidas + " veces.")
    