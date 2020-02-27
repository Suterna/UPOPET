window.onload = function Menus() {
    mostrarMenu();
}

$("#mnuAltaVeterinario").click(abrirAltaVeterinario);
$("#mnuAltaCliente").click(abrirAltaCliente);
$("#mnuAltaMascota").click(abrirAltaMascota);
$("#mnuAltaCita").click(abrirAltaCita);
$("#mnuListadoVeterinarios").click(abrirListadoVeterinarios);
$("#mnuListadoClientes").click(abrirListadoClientes);
$("#mnuListadoMascotas").click(abrirListadoMascotas);
$("#mnuListadoCitas").click(abrirListadoCitas);

function ocultaMenus(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i].substring(0, 1) == "F") {
            document.getElementById(array[i].substring(2)).classList.add("oculta");
        }
        if (array[i].substring(0, 1) == "T") {
            document.getElementById(array[i].substring(2)).classList.remove("oculta");
        }
    }
}

function mostrarMenu() {
    ocultaMenus(["T-menu", "F-altas", "F-listados", "T-imagenMenu", "F-volver", "F-tabla"]);
    $("form:not('#botonVolver')").parent("fieldset").hide("normal");
}

function mostrarAltas() {
    ocultaMenus(["F-menu", "T-altas", "F-listados", "F-imagenMenu", "T-volver"]);
}

function mostrarListados() {
    ocultaMenus(["F-menu", "F-altas", "T-listados", "F-imagenMenu", "T-volver"]);
}

function abrirAltaVeterinario() {

    // Oculto todos los formularios menos este
    $("form:not('#frmAltaVeterinario')").parent("fieldset").hide("normal");

    // Verifico si ya he cargado el formulario antes
    if ($('#frmAltaVeterinario').length == 0) {
        $("<div>").appendTo('#formularios').load("./paginas/altas/altaVeterinario/altaVeterinario.html",
            function() {
                $.getScript("./paginas/altas/altaVeterinario/altaVeterinario.js");
            });

    } else {
        // Lo muestro si está oculto
        $('#frmAltaVeterinario').parent().show("normal");
    }
}

function abrirAltaCliente() {

    // Oculto todos los formularios menos este
    $("form:not('#frmAltaCliente')").parent("fieldset").hide("normal");

    // Verifico si ya he cargado el formulario antes
    if ($('#frmAltaCliente').length == 0) {
        $("<div>").appendTo('#formularios').load("./paginas/altas/altaCliente/altaCliente.html",
            function() {
                $.getScript("./paginas/altas/altaCliente/altaCliente.js");
            });

    } else {
        // Lo muestro si está oculto
        $('#frmAltaCliente').parent().show("normal");
    }
}

function abrirAltaMascota() {

    // Oculto todos los formularios menos este
    $("form:not('#frmAltaMascota')").parent("fieldset").hide("normal");

    // Verifico si ya he cargado el formulario antes
    if ($('#frmAltaMascota').length == 0) {
        $("<div>").appendTo('#formularios').load("./paginas/altas/altaMascota/altaMascota.html",
            function() {
                $.getScript("./paginas/altas/altaMascota/altaMascota.js");
            });

    } else {
        // Lo muestro si está oculto
        $('#frmAltaMascota').parent().show("normal");
    }
}

function abrirAltaCita() {

    // Oculto todos los formularios menos este
    $("form:not('#frmAltaCita')").parent("fieldset").hide("normal");

    // Verifico si ya he cargado el formulario antes
    if ($('#frmAltaCita').length == 0) {
        $("<div>").appendTo('#formularios').load("./paginas/altas/altaCita/altaCita.html",
            function() {
                $.getScript("./paginas/altas/altaCita/altaCita.js");
            });

    } else {
        // Lo muestro si está oculto
        $('#frmAltaCita').parent().show("normal");
    }
}

function abrirListadoVeterinarios() {
    $("#tabla").removeClass("oculta");
    // Oculto todos los formularios menos este
    $("container:not('#listadoVeterinarios')").parent("div").hide("normal");

    // Verifico si ya he cargado el formulario antes
    if ($('#listadoVeterinarios').length == 0) {
        $.get("paginas/listados/listadoVeterinarios/listadoVeterinarios.php", null, escribeListado, 'html');
    } else {
        // Lo muestro si está oculto
        $('#listadoVeterinarios').show("normal");
    }
}

function abrirListadoClientes() {
    $("#tabla").removeClass("oculta");
    $("container:not('#listadoClientes')").parent("div").hide("normal");

    // Verifico si ya he cargado el formulario antes
    if ($('#listadoClientes').length == 0) {
        $.get("paginas/listados/listadoClientes/listadoClientes.php", null, escribeListado, 'html');
    } else {
        // Lo muestro si está oculto
        $('#listadoClientes').show("normal");
    }
}

function abrirListadoMascotas() {
    $("#tabla").removeClass("oculta");
    $("container:not('#listadoMascotas')").parent("div").hide("normal");

    // Verifico si ya he cargado el formulario antes
    if ($('#listadoMascotas').length == 0) {
        $.get("paginas/listados/listadoMascotas/listadoMascotas.php", null, escribeListado, 'html');
    } else {
        // Lo muestro si está oculto
        $('#listadoMascotas').show("normal");
    }
}

function abrirListadoCitas() {
    $("#tabla").removeClass("oculta");
    $("container:not('#listadoCitas')").parent("div").hide("normal");

    // Verifico si ya he cargado el formulario antes
    if ($('#listadoCitas').length == 0) {
        $.get("paginas/listados/listadoCitas/listadoCitas.php", null, escribeListado, 'html');
    } else {
        // Lo muestro si está oculto
        $('#listadoCitas').show("normal");
    }
}

function escribeListado(sHTML) {
    $("#tabla").html(sHTML);
}