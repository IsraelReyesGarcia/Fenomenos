<?php 
    include_once("../Modelo/Conexion.php");

    $db = new Conexion();
    if(isset($_POST['fenomeno'])){
        $objeto = json_decode(stripslashes($_REQUEST['fenomeno']));
        /* echo $objeto->id;
        echo "<br>";
        echo $objeto->año; */
        $respuesta = $db->fenomenoAño($objeto->id,$objeto->año);
        /* $respuesta = $db->tablefenomeno(); */
        print ($respuesta);
    }

    if(isset($_POST['cargar'])){
/*         $objeto = json_decode(stripslashes($_POST['cargar']));
 */
        $respuesta = $db->chartsfenomeno($_POST['cargar']);
        print($respuesta);
    }
?>