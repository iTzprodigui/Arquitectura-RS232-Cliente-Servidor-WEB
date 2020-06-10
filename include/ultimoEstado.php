<?php
include('conexion.php');

    $db = new db_pruebas(); 
    $ultEstado = $db->getEstado();

    $result = array();
    while($consulta = $ultEstado->fetch())
        array_push($result, array(
            'estado'    => $consulta['estado']
            ));

    echo json_encode(array("result" => $result));
?>