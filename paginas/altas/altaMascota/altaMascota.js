rellenarDesplegableClientes();

$("#btnAceptarProp").click(function() {
    var oAjax = instanciarXHR();

    var sParametros = "codCliente=" + frmAltaMascota.codCliente.value;
    sParametros += "&raza=" + frmAltaMascota.raza.value.trim();
    sParametros += "&sexo=" + frmAltaMascota.optradio.value;
    sParametros = encodeURI(sParametros);

    oAjax.open("POST", encodeURI("paginas/altas/altaMascota/altaMascota.php"));

    //Asociar manejador de evento de la respuesta
    oAjax.addEventListener("readystatechange", respuestaAltaMascota, false);

    // Cabecera POST
    oAjax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    //Hacer la llamada
    oAjax.send(sParametros);

    // $.post("paginas/altas/altaMascota/altaMascota.php", oPropietario, respuestaAltaPropietario, 'json');

});

function instanciarXHR() {
    var xhttp = null;

    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    } else // code for IE5 and IE6
    {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    return xhttp;
}

function rellenarDesplegableClientes() {
    if (localStorage["clientes"] != undefined) {
        $("#codCliente1").html(localStorage["clientes"]);
    } else {
        $.get("paginas/altas/altaMascota/getClientes.php", null, procesoRespuestaGetClientes, 'html');
    }
}

function procesoRespuestaGetClientes(sHTML) {
    localStorage["clientes"] = sHTML;

    $("#codCliente").html(localStorage["clientes"]);
}

function respuestaAltaMascota() {
    var oAjax = this;
    console.log("entra");
    // Proceso la respuesta cuando llega
    if (oAjax.readyState == 4 && oAjax.status == 200) {
        console.log(oAjax.responseText);

        var oRespuesta = JSON.parse(oAjax.responseText);

        if (oRespuesta.error == 0) { //Si no hay error
            frmAltaMascota.reset();
            $("#frmAltaMascota").parent().hide("normal");
        }
        alert(oRespuesta.mensaje);
    }
}

// function procesoRespuestaInsertGenteBD() {
//     var oAjax = this;

//     // Proceso la respuesta cuando llega
//     if (oAjax.readyState == 4 && oAjax.status == 200) {
//         console.log(oAjax.responseText);

//         var oRespuesta = JSON.parse(oAjax.responseText);

//         if (oRespuesta.error == 0) { //Si no hay error
//             frmAltaGente.reset()
//         }

//         alert(oRespuesta.mensaje);
//     }
// }