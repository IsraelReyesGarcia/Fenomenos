<?php 
    class Mar{
        private $nombre;
        private $nivel;

        public function __construct(){
            $this->nombre = "";
            $this->nivel = 0.0;
        }

        public function setNombre($nombre){
            $this->nombre = $nombre;
        }

        public function getNombre(){
            return $this->nombre;
        }

        public function setNivel($nivel){
            $this->nivel = $nivel;
        }

        public function getNivel(){
            return $this->nivel;
        }
    }
?>