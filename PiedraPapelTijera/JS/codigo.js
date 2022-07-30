//Funcion de creacion aleatoria de una eleccion entre 1 y 3
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

//Funcion de reglas logicas de piedra papel o tigeja

function eleccion(jugada) {

    let resultado = ""

    if (jugada == 1) {
        resultado = "Piedra 🪨"
    } else if (jugada == 2) {
        resultado = "Papel 📄"
    } else if (jugada == 3) {
        resultado = "Tijera ✂"
    } else {
        resultado = "Mal Elegido 💣"
    }

    return resultado

}

// 1 es piedra, 2 es papel, 3 es tijera

let jugador = 0
let pc = 0
let triunfos = 0
let perdidas = 0


while (triunfos < 3 && perdidas < 3) {

    pc = aleatorio(1, 3)
    jugador = prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera")

    alert("PC Eleige : " + eleccion(pc))
    alert("Tu Elegis : " + eleccion(jugador))

    // Combate
    if (pc == jugador) {
        alert("Empate")
    } else if (jugador == 1 && pc == 3) {
        alert("Ganaste")
        triunfos = triunfos + 1
    } else if (jugador == 2 && pc == 1) {
        alert("Ganaste")
        triunfos = triunfos + 1
    } else if (jugador == 3 && pc == 2) {
        alert("Ganaste")
        triunfos = triunfos + 1
    } else {
        alert("Perdiste")
        perdidas = perdidas + 1
    }


}

alert(" Ganaste : " + triunfos + " 🎉🎉🎉🎉🎉🎉 " + " Perdiste : " + perdidas + "💀💀💀💀💀")
