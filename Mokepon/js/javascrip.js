function iniciarJuego() {

    //Asigna a la variable el valor seleccionado con el ID
    let botonMascotaJugador = document.getElementById("boton-mascota")
    //Escucha constantemente la opcion seleccionar
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

}


//Genera un Mensjae informando la seleccion de mascota

function seleccionarMascotaJugador() {
    let inputhipodoge = document.getElementById("hipodoge")
    let inputcapipepo = document.getElementById("capipepo")
    let inputratigueya = document.getElementById("ratigueya")
    let spamMascotaJugador = document.getElementById("mascota-jugador")


    if (inputhipodoge.checked) {
        spamMascotaJugador.innerHTML = "Hipodoge"
    } else if (inputcapipepo.checked) {
        spamMascotaJugador.innerHTML = "Capipepo"
    } else if (inputratigueya.checked) {
        spamMascotaJugador.innerHTML = "Ratigueya"
    } else {
        alert("Selecciona una mascota")
    }

    seleccionarMascotaEnemigo()

}


//Genera un Mensjae informando la seleccion de mascota

function seleccionarMascotaEnemigo() {

    let ataqueAleatorio = aleatorio(1, 3)
    let spamMascotaEnemigo = document.getElementById("mascota-enemigo")

    if (ataqueAleatorio == 1) {
        spamMascotaEnemigo.innerHTML = "Hipodoge"
    } else if (ataqueAleatorio == 2) {
        spamMascotaEnemigo.innerHTML = "Capipepo"
    } else if (ataqueAleatorio == 3) {
        spamMascotaEnemigo.innerHTML = "Ratigueya"
    }
}

//Funcion de creacion aleatoria de una eleccion entre dos numeros
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}


//Espera a que cargue el HTML para integrar el JV
window.addEventListener("load", iniciarJuego)

