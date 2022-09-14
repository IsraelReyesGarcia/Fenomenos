<?php 
    class Municipio{
        private $nombre;
        private $cp;

        public function __construct(){
            $this->nombre = "";
            $this->cp = 0;
        }

        public function setNombre($nombte){
            $this->nombre = $nombre;
        }

        public function getNombre(){
            return $this->nombre;
        }

        public function setCp($cp){
            $this->cp = $cp;
        }

        public function getCp(){
            return $this->cp;
        }
 }
?>