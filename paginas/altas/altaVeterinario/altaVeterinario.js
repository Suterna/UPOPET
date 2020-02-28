$("#btnAceptarProp").click(function() {

    var oVeterinario = {
        nombre: frmAltaVeterinario.nombre.value.trim(),
        apellidos: frmAltaVeterinario.apellidos.value.trim(),
        telefono: frmAltaVeterinario.telefono.value.trim()
    };

    var sParametros = "datos=" + JSON.stringify(oVeterinario);

    $.post("paginas/altas/altaVeterinario/altaVeterinario.php", sParametros, respuestaAltaVeterinario, 'json');

});

function respuestaAltaVeterinario(oDatos, sStatus, oXHR) {

    if (oDatos.error) {
        alert(oDatos.mensaje);
    } else {
        alert(oDatos.mensaje);
        frmAltaVeterinario.reset();
        $("#frmAltaVeterinario").parent().hide("normal");
    }
}