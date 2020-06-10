<?php
    class db_pruebas{
        var $conexion;
        
        function __construct(){
            try {
                $this->conexion = new PDO('mysql:host=localhost:3307;dbname=arquitectura', 'root','');
                $this->conexion->exec("set names utf8");
            }catch (PDOException $e) {
                echo $e->getMessage();
            }
        }

        function getDatos(){
				$sql = 'SELECT * FROM personas';
				$listado = $this->conexion->prepare($sql);
				$listado->setFetchMode(PDO::FETCH_ASSOC);
				$listado->execute();
				return $listado;
        }
        
        function getEstado(){
            $sql = 'SELECT estado FROM personas ORDER BY id_personas DESC LIMIT 1';
            $getEstado = $this->conexion->prepare($sql);
            $getEstado->setFetchMode(PDO::FETCH_ASSOC);
            $getEstado->execute();
            return $getEstado;
        }
    }
    
?>
