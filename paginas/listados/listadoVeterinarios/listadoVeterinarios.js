$("#btnAceptarProp").click(function() {
    $.get("./paginas/listados/listadoVeterinarios/listadoVeterinarios.php", { nombre: frmListadoVeterinarios.nombre.value }, procesoRespuestaGetTabla, 'html');
});

function procesoRespuestaGetTabla(sHTML) {
    $("#tabla").removeClass("oculta");
    $("#tabla").html(sHTML);
    frmListadoVeterinarios.reset();
}