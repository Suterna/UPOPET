rellenarDesplegableClientes();

$("#btnAceptarProp").click(function() {
    $.get("./paginas/listados/listadoMascotas/listadoMascotas.php", { codCliente: frmListadoMascotas.codCliente.value }, procesoRespuestaGetTabla, 'html');
});

function procesoRespuestaGetTabla(sHTML) {
    $("#tabla").removeClass("oculta");
    $("#tabla").html(sHTML);
}

function rellenarDesplegableClientes() {
    $.get("paginas/listados/listadoMascotas/getClientes.php", null, procesoRespuestaGetClientes, 'html');

}

function procesoRespuestaGetClientes(sHTML) {
    $("#codCliente1").html(sHTML);
}