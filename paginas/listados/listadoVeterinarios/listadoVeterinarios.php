<?php

// Configuración BASE DE DATOS MYSQL
$servidor = "localhost";
$basedatos = "upopet";
$usuario = "root";
$password = "";

$nombre = $_GET["nombre"];
// Creamos la conexión al servidor.
$conexion = mysqli_connect($servidor, $usuario, $password, $basedatos) or die(mysqli_error($conexion));
mysqli_set_charset($conexion, "utf8");

// Consulta SQL para obtener los datos de los centros.
$sql = "select * from veterinarios where nombre like '%" . $nombre . "%' order by codVeterinario";
$resultados = mysqli_query($conexion, $sql) or die(mysqli_error($conexion));

$datos = "";
$sTabla = "";

$i = 0;
while ($fila = mysqli_fetch_array($resultados)) {
    // print_r($fila);
    if ($i == 0) {
        $sTabla .= '<div><container id="listadoVeterinarios"><th>CodVeterinario</th><th>Nombre</th><th>Apellidos</th><th>Teléfono</th></container>';
    }
    $sTabla .= '<tr><td>' . $fila["codVeterinario"] . '</td><td>' . $fila["nombre"] . '</td><td>' . $fila["apellidos"] . '</td><td>' . $fila["telefono"] . '</td></tr>';
    $i++;
}
$sTabla .= '</div>';
// Devuelvo el fragmento HTML
echo $sTabla;

mysqli_close($conexion);
