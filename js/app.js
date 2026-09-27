// Alejandro Rojas

// registrarse
function registrar() {
    let nombre = document.getElementById("nombre").value;
    let usuario = document.getElementById("usuario").value;
    let contrasena = document.getElementById("contrasena").value;
    let mensaje = document.getElementById("mensaje");

    if (nombre == "" || usuario == "" || contrasena == "") {
        mensaje.innerHTML = "Llena todos los campos";
        mensaje.style.color = "red";
        return;
    }

    if (contrasena.length < 6) {
        mensaje.innerHTML = "La contraseña debe tener minimo 6 caracteres";
        mensaje.style.color = "red";
        return;
    }

    // si el usuario ya existe no lo deja crear
    if (localStorage.getItem("usuario_" + usuario) != null) {
        mensaje.innerHTML = "Ese usuario ya existe, escoge otro";
        mensaje.style.color = "red";
        return;
    }

    localStorage.setItem("usuario_" + usuario, contrasena);
    localStorage.setItem("nombre_" + usuario, nombre);

    alert("Cuenta creada, ahora inicia sesion");
    window.location.href = "login.html";
}

// iniciar sesion
function ingresar() {
    let usuario = document.getElementById("usuario").value;
    let contrasena = document.getElementById("contrasena").value;
    let mensaje = document.getElementById("mensaje");

    if (usuario == "" || contrasena == "") {
        mensaje.innerHTML = "Llena todos los campos";
        mensaje.style.color = "red";
        return;
    }

    if (localStorage.getItem("usuario_" + usuario) == contrasena) {
        localStorage.setItem("sesion", localStorage.getItem("nombre_" + usuario));
        window.location.href = "menu.html";
    } else {
        mensaje.innerHTML = "Usuario o contraseña incorrectos";
        mensaje.style.color = "red";
    }
}

// recuperar contraseña
function recuperar() {
    let usuario = document.getElementById("usuario").value;
    let nueva = document.getElementById("nueva").value;
    let confirmar = document.getElementById("confirmar").value;
    let mensaje = document.getElementById("mensaje");

    if (usuario == "" || nueva == "" || confirmar == "") {
        mensaje.innerHTML = "Llena todos los campos";
        mensaje.style.color = "red";
        return;
    }

    if (localStorage.getItem("usuario_" + usuario) == null) {
        mensaje.innerHTML = "Ese usuario no existe";
        mensaje.style.color = "red";
        return;
    }

    if (nueva != confirmar) {
        mensaje.innerHTML = "Las contraseñas no son iguales";
        mensaje.style.color = "red";
        return;
    }

    if (nueva.length < 6) {
        mensaje.innerHTML = "La contraseña debe tener minimo 6 caracteres";
        mensaje.style.color = "red";
        return;
    }

    localStorage.setItem("usuario_" + usuario, nueva);

    alert("Contraseña cambiada");
    window.location.href = "login.html";
}

// si no ha iniciado sesion lo manda al login
function verificarSesion() {
    if (localStorage.getItem("sesion") == null) {
        window.location.href = "login.html";
    }
}

// para el menu
function saludar() {
    document.getElementById("saludo").innerHTML = "Hola, " + localStorage.getItem("sesion");
}

// opcion 8 salir
function salir() {
    localStorage.removeItem("sesion");
    window.location.href = "index.html";
}


// superficie y volumen (los usan las calculadoras)

function calcularSuperficie(ancho, largo) {
    return ancho * largo;
}

function calcularVolumen(espesor, ancho, largo) {
    return espesor * ancho * largo;
}


// 1 muro
function calcularMuro() {
    let largo = parseFloat(document.getElementById("largo").value);
    let alto = parseFloat(document.getElementById("alto").value);
    let mensaje = document.getElementById("mensaje");

    if (isNaN(largo) || isNaN(alto) || largo <= 0 || alto <= 0) {
        mensaje.innerHTML = "Pon numeros mayores a 0";
        mensaje.style.color = "red";
        return;
    }
    mensaje.innerHTML = "";

    let superficie = calcularSuperficie(largo, alto);
    let cemento;
    let arena;
    let ladrillos;

    if (document.getElementById("espesor30").checked) {
        cemento = superficie * 15.2;
        arena = superficie * 0.115;
        ladrillos = superficie * 120;
    } else {
        cemento = superficie * 10.9;
        arena = superficie * 0.09;
        ladrillos = superficie * 90;
    }

    document.getElementById("resSuperficie").innerHTML = superficie.toFixed(2);
    document.getElementById("resCemento").innerHTML = cemento.toFixed(2);
    document.getElementById("resArena").innerHTML = arena.toFixed(2);
    document.getElementById("resLadrillos").innerHTML = Math.ceil(ladrillos);
}

// 2 viga
function calcularViga() {
    let largo = parseFloat(document.getElementById("largo").value);
    let mensaje = document.getElementById("mensaje");

    if (isNaN(largo) || largo <= 0) {
        mensaje.innerHTML = "Pon un numero mayor a 0";
        mensaje.style.color = "red";
        return;
    }
    mensaje.innerHTML = "";

    document.getElementById("resCemento").innerHTML = (largo * 9).toFixed(2);
    document.getElementById("resArena").innerHTML = (largo * 0.02).toFixed(2);
    document.getElementById("resPiedra").innerHTML = (largo * 0.02).toFixed(2);
    document.getElementById("resHierro8").innerHTML = (largo * 4).toFixed(2);
    document.getElementById("resHierro4").innerHTML = (largo * 3).toFixed(2);
}

// 3 columna
function calcularColumna() {
    let largo = parseFloat(document.getElementById("largo").value);
    let mensaje = document.getElementById("mensaje");

    if (isNaN(largo) || largo <= 0) {
        mensaje.innerHTML = "Pon un numero mayor a 0";
        mensaje.style.color = "red";
        return;
    }
    mensaje.innerHTML = "";

    document.getElementById("resCemento").innerHTML = (largo * 7.5).toFixed(2);
    document.getElementById("resArena").innerHTML = (largo * 0.016).toFixed(2);
    document.getElementById("resPiedra").innerHTML = (largo * 0.016).toFixed(2);
    document.getElementById("resHierro10").innerHTML = (largo * 6).toFixed(2);
    document.getElementById("resHierro4").innerHTML = (largo * 3).toFixed(2);
}

// 4 contrapiso
function calcularContrapiso() {
    let espesor = parseFloat(document.getElementById("espesor").value);
    let ancho = parseFloat(document.getElementById("ancho").value);
    let largo = parseFloat(document.getElementById("largo").value);
    let mensaje = document.getElementById("mensaje");

    if (isNaN(espesor) || isNaN(ancho) || isNaN(largo) || espesor <= 0 || ancho <= 0 || largo <= 0) {
        mensaje.innerHTML = "Pon numeros mayores a 0";
        mensaje.style.color = "red";
        return;
    }
    mensaje.innerHTML = "";

    let volumen = calcularVolumen(espesor, ancho, largo);

    document.getElementById("resCemento").innerHTML = (volumen * 105).toFixed(2);
    document.getElementById("resArena").innerHTML = (volumen * 0.45).toFixed(2);
    document.getElementById("resPiedra").innerHTML = (volumen * 0.9).toFixed(2);
}

// 5 techo
function calcularTecho() {
    let espesor = parseFloat(document.getElementById("espesor").value);
    let ancho = parseFloat(document.getElementById("ancho").value);
    let largo = parseFloat(document.getElementById("largo").value);
    let mensaje = document.getElementById("mensaje");

    if (isNaN(espesor) || isNaN(ancho) || isNaN(largo) || espesor <= 0 || ancho <= 0 || largo <= 0) {
        mensaje.innerHTML = "Pon numeros mayores a 0";
        mensaje.style.color = "red";
        return;
    }
    mensaje.innerHTML = "";

    // el pdf lo da por m2
    let superficie = calcularSuperficie(ancho, largo);

    document.getElementById("resCemento").innerHTML = (superficie * 33).toFixed(2);
    document.getElementById("resArena").innerHTML = (superficie * 0.072).toFixed(2);
    document.getElementById("resPiedra").innerHTML = (superficie * 0.072).toFixed(2);
    document.getElementById("resHierro8").innerHTML = (superficie * 7).toFixed(2);
    document.getElementById("resHierro6").innerHTML = (superficie * 4).toFixed(2);
}

// 6 piso
function calcularPiso() {
    let ancho = parseFloat(document.getElementById("ancho").value);
    let largo = parseFloat(document.getElementById("largo").value);
    let mensaje = document.getElementById("mensaje");

    if (isNaN(ancho) || isNaN(largo) || ancho <= 0 || largo <= 0) {
        mensaje.innerHTML = "Pon numeros mayores a 0";
        mensaje.style.color = "red";
        return;
    }
    mensaje.innerHTML = "";

    let superficie = calcularSuperficie(ancho, largo);
    // mas el 10% por los recortes
    let total = superficie + superficie * 0.10;

    document.getElementById("resPiso").innerHTML = total.toFixed(2);
}

// 7 pintura
function calcularPintura() {
    let superficie = parseFloat(document.getElementById("superficie").value);
    let mensaje = document.getElementById("mensaje");

    if (isNaN(superficie) || superficie <= 0) {
        mensaje.innerHTML = "Pon un numero mayor a 0";
        mensaje.style.color = "red";
        return;
    }
    mensaje.innerHTML = "";

    // 1 litro rinde 6 m2
    let litros = superficie / 6;

    document.getElementById("resPintura").innerHTML = litros.toFixed(2);
}
