<?php

// Configuración BASE DE DATOS MYSQL
$servidor = "localhost";
$basedatos = "upopet";
$usuario = "root";
$password = "";

// Creamos la conexión al servidor.
$conexion = mysqli_connect($servidor, $usuario, $password, $basedatos) or die(mysqli_error($conexion));
mysqli_set_charset($conexion, "utf8");

// Consulta SQL para obtener los datos de los centros.
$sql = "select * from mascotas order by codChip";
$resultados = mysqli_query($conexion, $sql) or die(mysqli_error($conexion));

$datos = "";
$sTabla = "";

$i = 0;
while ($fila = mysqli_fetch_array($resultados)) {
    // print_r($fila);
    if ($i == 0) {
        $sTabla .= '<div><container id="listadoMascotas"><th>CodChip</th><th>codCliente</th><th>raza</th><th>sexo</th></container>';
    }
    if ($fila["sexo"] == 'H') {
        $sexo = 'Hembra';
    } else {
        $sexo = 'Macho';
    }
    $sTabla .= '<tr><td>' . $fila["codChip"] . '</td><td>' . $fila["codCliente"] . '</td><td>' . $fila["raza"] . '</td><td>' . $fila["sexo"] . '</td></tr>';
    $i++;
}
$sTabla .= '</div>';
// Devuelvo el fragmento HTML
echo $sTabla;

mysqli_close($conexion);
