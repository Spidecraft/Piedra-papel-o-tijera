let jugador
let pc
let triunfos = 0
let perdidas = 0
let resultado = ""
let resulta
let classe = []
let opcion

const botonPiedra = document.getElementById("Piedra")
const botonPapel = document.getElementById("Papel")
const botonTijera = document.getElementById("Tijera")
const divJugar = document.getElementById("juego")
const botonIniciar = document.getElementById("iniciar")
const botonPartida = document.getElementById("partida")
const botonLimpiarVictorias = document.getElementById("lVictorias")

const spanVictoriasJugador = document.getElementById("victorias-jugador")
const spanVictoriasEnemigo = document.getElementById("victorias-enemigo")

const contenedorImagen = document.getElementById("ataques-del-jugador")
const contenedorImagenEnemigo = document.getElementById("ataques-del-enemigo")
const sectionMensaje = document.getElementById("resultado")

class opciones {
    constructor(Piedra, Papel, Tijera) {
	this.Piedra = Piedra
	this.Papel = Papel
	this.Tijera = Tijera
        this.nombreP = "papel"
        this.nombrep = "piedra"
        this.nombreT = "tijera"
    }
}

let tú = new opciones("./assets/piedra.png", "./assets/papel.png", "./assets/tijera.png")

let contrincante = new opciones("./assets/piedra2.png", "./assets/papel-2.png", "./assets/tijera2.png")
classe.push(tú, contrincante)
function carga() { 
    botonPartida.style.display = "none"
    botonLimpiarVictorias.style.display = "none"

    divJugar.style.display = "none"

    botonPiedra.addEventListener("click", atacarConPiedra)
    botonPapel.addEventListener("click", atacarConPapel)
    botonTijera.addEventListener("click", atacarConTijera)

    botonIniciar.addEventListener("click", mostrarContenido)
    botonLimpiarVictorias.addEventListener("click", desVictorias)
    botonPartida.addEventListener("click", otraPartida)

}
function mostrarContenido() {
    divJugar.style.display = "block"
    botonIniciar.style.display = "none"
}
function aleatorio (min, max){
    return Math.floor( Math.random() * (max - min + 1) + min)
}
function ataqueEnemigo(jugada) {
    jugada = aleatorio (1,3)
    if(jugada == 1) {
    resultado = "Piedra"
    } else if(jugada == 2) {
        resultado = "Papel"
    } else if(jugada == 3) {
        resultado = "Tijera"
    }
    jugar()
}
function atacarConTijera() {
    jugador = "Tijera"
    opcion = opciones.Tijera
    ataqueEnemigo(pc)
}
function atacarConPapel() {
    jugador = "Papel"
    opcion = opciones.Papel
    ataqueEnemigo(pc)
}
function atacarConPiedra() {
    jugador = "Piedra"
    opcion = opciones.Piedra
    ataqueEnemigo(pc)
}
function desVictorias() {
    triunfos = 0
    perdidas = 0
    spanVictoriasJugador.innerHTML = triunfos
    spanVictoriasEnemigo.innerHTML = perdidas
}
function jugar() {
    if((jugador == "Tijera" && resultado == "Papel") || (jugador == "Papel" && resultado == "Piedra") || 
    (jugador == "Piedra" && resultado == "Tijera")) {
        triunfos++
        spanVictoriasJugador.innerHTML = triunfos
        resulta = "Tú ganas"
        result()
    } else if (jugador == resultado) {
        resulta = "Empate"
        result()
    } else {
        perdidas++
        spanVictoriasEnemigo.innerHTML = perdidas
        resulta = "Tú pierdes"
        result()
    }
}
function result() {
    let opcionDeJugador
    let opcionDeEnemigo
    //tú
    if(jugador == "Tijera") {
            opcionDeJugador = `<img src=${tú.Tijera}>`
    } else if(jugador == "Piedra") {
            opcionDeJugador = `<img src=${tú.Piedra}>`
    } else if(jugador == "Papel") {
            opcionDeJugador = `<img src=${tú.Papel}>`
    }
    //pc
    if(resultado == "Tijera") {
            opcionDeEnemigo = `<img src=${contrincante.Tijera} style="margin-left: 2px;">`
    } else if(resultado == "Piedra") {
            opcionDeEnemigo = `<img src=${contrincante.Piedra} style="margin-left: 13px;">`
    } else if(resultado == "Papel") {
            opcionDeEnemigo = `<img src=${contrincante.Papel}>`
    }
    contenedorImagen.innerHTML = opcionDeJugador
    contenedorImagenEnemigo.innerHTML = opcionDeEnemigo
    sectionMensaje.innerHTML = resulta
    console.log(opcionDeEnemigo)
    para()
}
function para() {
    botonPiedra.disabled = true
    botonPapel.disabled = true
    botonTijera.disabled = true 
    botonPartida.style.display = "block"
    botonLimpiarVictorias.style.display = "block"
}
function otraPartida() {
    botonPiedra.disabled = false
    botonPapel.disabled = false
    botonTijera.disabled = false 
    botonPartida.style.display = "none"
    botonLimpiarVictorias.style.display = "none"
    opcionDeJugador = `<img class="mano" src="./assets/papel.png">`
    opcionDeEnemigo = `<img class="mano" src="./assets/papel-2.png">`
    contenedorImagen.innerHTML = opcionDeJugador
    contenedorImagenEnemigo.innerHTML = opcionDeEnemigo
    resulta = "Suerte"
    sectionMensaje.innerHTML = resulta
}
//alert("Ganastes " + triunfos + " veces. Perdistes " + perdidas + " veces")
window.addEventListener("load", carga)