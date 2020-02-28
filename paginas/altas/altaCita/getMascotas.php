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
$sql = "select mascotas.codChip, mascotas.raza, clientes.nombre, clientes.apellidos from mascotas, clientes where clientes.codCliente = mascotas.codCliente order by clientes.nombre";
$resultados = mysqli_query($conexion, $sql) or die(mysqli_error($conexion));

$datos = "";

while ($fila = mysqli_fetch_array($resultados)) {
    $datos .= '<option value="' . $fila["codChip"] . '">CodChip: ' . $fila["codChip"] . ' - ' . $fila["raza"] . ' - ' . $fila["nombre"] . ' ' . $fila["apellidos"] . '</option>';
}

// Devuelvo el fragmento HTML
echo $datos;

mysqli_close($conexion);
