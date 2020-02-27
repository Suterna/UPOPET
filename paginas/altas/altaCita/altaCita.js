rellenarDesplegables();
// $(document).ready(function() {
//     $('#fechaCita').datepicker();
// });

$("#btnAceptarProp").click(function() {
    var oCita = {
        codVeterinario: frmAltaCita.codVeterinario.value,
        codCliente: frmAltaCita.codCliente.value,
        codChip: frmAltaCita.codChip.value,
        fechaCita: frmAltaCita.fechaCita.value
    };

    var sParametros = "datos=" + JSON.stringify(oCita);

    $.post("paginas/altas/altaCita/altaCita.php", sParametros, respuestaAltaCita, 'json');

});

function rellenarDesplegables() {
    $.get("paginas/altas/altaCita/getVeterinarios.php", null, procesoRespuestaGetVeterinarios, 'html');
    $.get("paginas/altas/altaCita/getClientes.php", null, procesoRespuestaGetClientes, 'html');
    $.get("paginas/altas/altaCita/getMascotas.php", null, procesoRespuestaGetMascotas, 'html');
}

function procesoRespuestaGetVeterinarios(sHTML) {
    $("#codVeterinario1").html(sHTML);
}

function procesoRespuestaGetClientes(sHTML) {
    $("#codCliente1").html(sHTML);
}

function procesoRespuestaGetMascotas(sHTML) {
    $("#codChip1").html(sHTML);
}

function respuestaAltaCita(oDatos, sStatus, oXHR) {
    if (oDatos.error) {
        alert(oDatos.mensaje);
    } else {
        alert(oDatos.mensaje);
        frmAltaCita.reset();
        $("#frmAltaCita").parent().hide("normal");
    }
}