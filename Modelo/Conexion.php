<?php 
    class Conexion{
        private $sql;

        public function __construct(){
            $this->sql = new mysqli("localhost","root","","fenomenoMexico");
            if($this->sql->errno){
                echo "No se puede realizar la conexión";
            }
        }

        /* Función para obtener el número de ves que ocurre un fenómeno y sus colores correspondientes*/
        public function fenomenoAño($id,$año){
            $idFenomeno = (int) $id;
            switch($idFenomeno){
                case 1: $color = 'rojo';
                    break;
                case 2: $color = 'azul';
                    break;
                case 3: $color = 'belize_hole';
                        break;
                case 4: $color = 'rosa';
                        break;
                case 5: $color = 'indigo';
                        break;
                default: echo "Sin color";
                        break;
            }
            $fecha_inicio1 = $año."-00-00";
            $fecha_inicio2 = $año."-12-31";
            
            $arreglo  = array();
            for($cont = 1; $cont<=32;$cont += 1){
                $consulta = "SELECT COUNT(*) FROM fenomeno_estado_municipio WHERE id_estado = $cont AND id_fenomeno = $idFenomeno AND fecha_inicio BETWEEN '".$fecha_inicio1."' AND '".$fecha_inicio2."' AND fecha_fin BETWEEN '".$fecha_inicio1."' AND '".$fecha_inicio2."'";
                $respuesta = $this->sql->query($consulta);
                $valor = $respuesta->fetch_array();
                $arreglo[0][$cont-1] = $valor[0];
            }
            for($contb = 1; $contb<=100; $contb += 1){
                $consulta = "SELECT color FROM $color WHERE id = $contb";
                $resultado = $this->sql->query($consulta);
                $valorb = $resultado->fetch_array();
                $arreglo[1][$contb-1] = $valorb[0]; 
            }
            $objetoJson = json_encode($arreglo);
            return $objetoJson;
        }

        public function consultafenomeno($id){
            $idFenomeno = (int) $id;
            $estado = array();
            $nombreEstado = array();
            $cont =1;
            while ($cont <=32){
                $consulta = "SELECT nombre from estados WHERE id_estados=$cont";
                $nombresql = $this->sql->query($consulta);
                $nombre = $nombresql->fetch_array();
                $estado[0][$cont] =  $nombre[0];
                for($ia = 2000; $ia <= 2020; $ia +=1 ){
                    $fecha_inicio = $ia."-00-00";
                    $fecha_fin = $ia."-12-31";
                    $consulta ="SELECT COUNT(*) FROM fenomeno_estado_municipio WHERE id_estado = $cont AND id_fenomeno = $idFenomeno AND fecha_inicio BETWEEN  '".$fecha_inicio."' AND '".$fecha_fin."' AND fecha_fin BETWEEN '".$fecha_inicio."' AND '".$fecha_fin."'";
                    $rsql = $this->sql->query($consulta);
                    $resultado = $rsql->fetch_array();
                    $estado[1][$cont][$ia]=$resultado[0];
                }
                $cont +=1;
            }
            $json  = json_encode($estado);
            print($json);
        }

        public function tablefenomeno(){
            $idFenomeno=1;
            $cont = 2000;
            $arregloAño = array();
            $arreglo = array();
            while($cont<=2020){
                $fecha_inicio = $cont."-00-00";
                $fecha_fin = $cont."-12-31";
                for($iE = 0; $iE<32; $iE +=1 ){
                    $consulta = "SELECT COUNT(*) FROM fenomeno_estado_municipio WHERE id_estado = $iE AND id_fenomeno = $idFenomeno AND fecha_inicio BETWEEN  '".$fecha_inicio."' AND '".$fecha_fin."' AND fecha_fin BETWEEN '".$fecha_inicio."' AND '".$fecha_fin."'";
                    $respuestasql = $this->sql->query($consulta);
                    $respuesta = $respuestasql->fetch_array();
                    /* $arreglo[$iE][$respuesta[0]]; */
                    $año = array (
                        $iE => $respuesta[0]
                    );

                }
                $arregloAño[] = $año;
                $cont += 1;
            }

            $json = json_encode($arregloAño);
            echo $json;
        }

        public function chartsfenomeno($idFenomeno){
            $id = (int) $idFenomeno;
            $arrayAnios = array();
            $anios = 2000;

            while($anios <= 2020 ){
                $fecha_inicio = $anios."-00-00";
                $fecha_fin = $anios."-12-31";
                $consulta= "SELECT COUNT(*) FROM fenomeno_estado_municipio WHERE id_fenomeno = $id AND fecha_registro BETWEEN '".$fecha_inicio."' AND '".$fecha_fin."'";
                $respuestasql = $this->sql->query($consulta);
                if($respuestasql->num_rows > 0){
                    $respuesta = $respuestasql->fetch_array();
                    $num = $respuesta[0];
                    $arrayAnios[0][] = $anios;
                    $arrayAnios[1][] = $num;
                    
                }else{
                    $arrayAnios[] = ["No hay registros"];
                }
                $anios += 1;
            }

            $json = json_encode($arrayAnios);
            echo $json;
        }
    }
?>