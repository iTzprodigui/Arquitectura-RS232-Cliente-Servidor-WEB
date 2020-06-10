<?php
include('conexion.php');

    $db = new db_pruebas(); 
    $datos = $db->getDatos();
    $ultEstado = $db->getEstado();

    $result = array();
    while($consulta = $datos->fetch())
        array_push($result, array(
            'id'        => $consulta['id_personas'],
            'nombre'    => $consulta['nombre'],
            'dispositivo'    => $consulta['dispositivo'],
            'estado'    => $consulta['estado'],
            'fecha'    => $consulta['fecha'],
            ));

    echo json_encode(array("result" => $result));
?>