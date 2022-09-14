<?php 
    class Declaratoria{
        private $fenomeno;
        private $causas;
        private $fecha_registro;
        private $fecha_inicio;
        private $fecha_fin;

        public function __construct(){
            $this->fenomeno = "";
            $this->causas = "";
            $this->fecha_resgistro = "00/00/0000";
            $this->fecha_inicio = "00/00/0000";
            $this->fecha_fin= "00/00/0000";
        }

        public function setFenomeno($fenomeno){
            $this->fenomneno = $fenomeno;
        }

        public function getFenomeno(){
            return $this->fenomeno;
        }

        public function setCausas($causas){
            $this->causas = $causas;
        }
        
        public function getCausas(){
            return $this->causas;
        }

        public function setFecha_registro($fecha_registo){
            $this->fecha_registro = $fecha_registo;
        }

        public function getFecha_registro(){
            return $this->getFecha_registro;
        }

        public function setFecha_inicio($fecha_inicio){
             $this->setFecha_inicio  = $fecha_inicio;
        }

        public function getFecha_inicio(){
            return $this->getFecha_inicio;
        }

        public function setFecha_fin(){
            $this->fecha_fin = $fecha_fin;
        }

        public function getFecha_fin(){
            return $this->fecha_fina;
        }
    }
?>