<?php

// Configuración BASE DE DATOS MYSQL
$servidor = "localhost";
$basedatos = "upopet";
$usuario = "root";
$password = "";

$codCliente = $_POST["codCliente"];
$sexo = $_POST["sexo"];
$raza = $_POST["raza"];

// Creamos la conexión al servidor.
$conexion = mysqli_connect($servidor, $usuario, $password, $basedatos) or die(mysqli_error($conexion));
mysqli_query($conexion, "utf8");

$sql = "INSERT INTO mascotas (codCliente, raza, sexo) VALUES ('$codCliente','$raza','$sexo')";
$resultado = mysqli_query($conexion, $sql);

if ($resultado) {
    $respuesta["error"] = 0;
    $respuesta["mensaje"] = "Alta realizada";
} else {
    $respuesta["error"] = 1;
    $respuesta["mensaje"] = "Error en el proceso de alta: " . mysqli_error($conexion);
}

echo json_encode($respuesta);

mysqli_close($conexion);
