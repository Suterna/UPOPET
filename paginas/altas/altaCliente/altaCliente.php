<?php
require_once 'pdo_connect.php';

$resultData = [];

if (isset($_FILES['xml_data']['name']) && $_FILES['xml_data']['name'] != '') {
    $accept_ext = array('xml');
    $file_data = explode('.', $_FILES['xml_data']['name']);
    $file_ext = end($file_data);
    if (in_array($file_ext, $accept_ext)) {
        $xml_data = simplexml_load_file($_FILES['xml_data']['tmp_name']);

        echo $xml_data;

        $query = "INSERT INTO clientes (codCliente, nombre, apellidos, telefono) VALUES(:codCliente, :nombre, :apellidos, :telefono);";
        $statement = $pdo_conn->prepare($query);
        for ($i = 0; $i < count($xml_data); $i++) {
            $result = $statement->execute([
                ':codCliente' => $xml_data->cliente[$i]->codCliente,
                ':nombre' => $xml_data->cliente[$i]->nombre,
                ':apellidos' => $xml_data->cliente[$i]->apellidos,
                ':telefono' => $xml_data->cliente[$i]->telefono,
            ]);

            //echo json_encode($result);

            if (!$result) {
                $resultData['status'] = '400';
                $resultData['message'] = 'El archivo XML tiene un formato inválido o los datos estan repetidos';
                echo json_encode($resultData);
                exit;
            }

        }
        $resultData['status'] = '200';
        $resultData['message'] = 'El archivo XML ha sido importado correctamente';
    } else {
        $resultData['status'] = '400';
        $resultData['message'] = 'No es un formato de archivo válido';
    }
} else {
    $resultData['status'] = '400';
    $resultData['message'] = 'Por favor seleccione un archivo XML';
}

echo json_encode($resultData);
