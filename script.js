/* ==================== CAMBIAR DE SECCIÓN ==================== */

function mostrarCarta() {

    document.getElementById("bienvenida").classList.add("oculto");

    document.getElementById("carta").classList.remove("oculto");

    window.scrollTo(0, 0);
}


function mostrarMusica() {

    document.getElementById("carta").classList.add("oculto");

    document.getElementById("musica").classList.remove("oculto");

    window.scrollTo(0, 0);
}


function mostrarFinal() {

    document.getElementById("musica").classList.add("oculto");

    document.getElementById("final").classList.remove("oculto");

    window.scrollTo(0, 0);
}