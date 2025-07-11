let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego() {  
    
    let sectionSeleccionarataque = document.getElementById("seleccionar-ataque");
    sectionSeleccionarataque.style.display = "none";
    
    let sectionMensajes = document.getElementById("mensajes");
    sectionMensajes.style.display = "none";

    let sectionreiniciarjuego = document.getElementById("reiniciar-juego");
    sectionreiniciarjuego.style.display = "none";

    let botonMascotaJugador = document.getElementById("boton-mascotas");
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador); 

    let botonFuego = document.getElementById("boton-Fuego");
    botonFuego.addEventListener("click", ataqueFuego);
    let botonAgua = document.getElementById("boton-Agua");   
    botonAgua.addEventListener("click", ataqueAgua);   
    let botonTierra = document.getElementById("boton-Tierra");
    botonTierra.addEventListener("click", ataqueTierra);

    let botonReiniciar = document.getElementById("boton-reiniciar");
    botonReiniciar.addEventListener("click", reiniciarJuego);
}

function mostrarSeccionSeleccionarAtaque() {
        let sectionseleccionarmascota = document.getElementById("seleccionar-mascota");
    sectionseleccionarmascota.style.display = "none";

    let sectionSeleccionarataque = document.getElementById("seleccionar-ataque");
    sectionSeleccionarataque.style.display = "flex";
    
    let sectionMensajes = document.getElementById("mensajes");
    sectionMensajes.style.display = "block";
}
function seleccionarMascotaJugador() { 



    let inputHipodoge = document.getElementById("hipodogue");
    let inputCapipego = document.getElementById("capipego");
    let inputRatigueya = document.getElementById("ratigueya");
    let spanMascotaJugador = document.getElementById("mascota-Jugador");

    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML= "Hipodogue" 
        seleccionarMascotaEnemigo()
    } else if (inputCapipego.checked) {
        spanMascotaJugador.innerHTML= "Capipego"
        seleccionarMascotaEnemigo()
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML= "Ratigueya"
        seleccionarMascotaEnemigo()
    } else {
        alert("No seleccionaste ninguna mascota");
    }
    
}
function ataqueFuego() {
        ataqueJugador = "Fuego"
        ataqueAleatorioEnemigo()
    }

function ataqueAgua() {
        ataqueJugador = "Agua"
        ataqueAleatorioEnemigo()  
    }   
function ataqueTierra() {
        ataqueJugador = "Tierra"
        ataqueAleatorioEnemigo() 
        }

function seleccionarMascotaEnemigo() {
    mostrarSeccionSeleccionarAtaque()
    let mascotaAleatoria = aleatorio(1, 3)
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo");

    if (mascotaAleatoria == 1) {
        spanMascotaEnemigo.innerHTML = "Hipodogue"
    } else if (mascotaAleatoria == 2) {
        spanMascotaEnemigo.innerHTML = "Capipego"
    } else {
        spanMascotaEnemigo.innerHTML = "Ratigueya"
    }
}
function ataqueAleatorioEnemigo() {  
     let ataqueAleatorio = aleatorio(1, 3)

     if (ataqueAleatorio == 1) {
        ataqueEnemigo = "Fuego" 
    }  else if (ataqueAleatorio == 2) {
        ataqueEnemigo = "Agua"  
    } else if (ataqueAleatorio == 3) {
        ataqueEnemigo = "Tierra"
    }
    combate()
}
function combate() {
    let spanvidasJugador    = document.getElementById("vidas-jugador")
    let spanvidasEnemigo    = document.getElementById("vidas-enemigo")
   
    if (ataqueJugador == ataqueEnemigo) {
        crearMensaje("Empate");
    } else if (ataqueJugador == "Fuego" && ataqueEnemigo == "Tierra") {
        crearMensaje("Ganaste");
        vidasEnemigo--
        spanvidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == "Agua" && ataqueEnemigo == "Fuego") {
        crearMensaje("Ganaste");
        vidasEnemigo--
        spanvidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == "Tierra" && ataqueEnemigo == "Agua") {
        crearMensaje("Ganaste");
        vidasEnemigo--
        spanvidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje("Perdiste");
        vidasJugador--
        spanvidasJugador.innerHTML = vidasJugador
       
        
    }
    revisarVidas ()
}
function revisarVidas() {
    let spanvidasJugador    = document.getElementById("vidas-jugador")
    let spanvidasEnemigo    = document.getElementById("vidas-enemigo")
 
        if (vidasEnemigo  == 0){
            crearMensajeFinal("¡Felicidades, ganaste!😁")
        } else if (vidasJugador == 0) {
            crearMensajeFinal("¡Lo siento, perdiste!😒")
        }   
}  
    

function crearMensaje(Resultado) { 
    let parrafo = document.createElement("p")
    parrafo.innerHTML = `Tu mascota ataca con ${ataqueJugador} y la mascota enemiga ataca con ${ataqueEnemigo} - ${Resultado}`;
    let sectionmensaje = document.getElementById("mensajes")
    sectionmensaje.appendChild(parrafo)
    console.log(parrafo)
}

function crearMensajeFinal(resultadoFinal) { 
    let sectionmensaje = document.getElementById("mensajes")

    let parrafo = document.createElement("p")

    parrafo.innerHTML = resultadoFinal

    sectionmensaje.appendChild(parrafo)
    
    let botonFuego = document.getElementById("boton-Fuego");
    botonFuego.disabled=true;   
    let botonAgua = document.getElementById("boton-Agua");   
    botonAgua.disabled=true;
    let botonTierra = document.getElementById("boton-Tierra");
    botonTierra.disabled=true;

    let sectionreiniciarjuego = document.getElementById("reiniciar-juego");
    sectionreiniciarjuego.style.display = "block";
 }

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


window.addEventListener("load", iniciarJuego);

