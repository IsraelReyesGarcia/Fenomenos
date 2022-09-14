<?php 
    class Estado{
        private $nombre;

        public function __construct(){
            $this->nombre = "";
        }

        public function setNombre($nombte){
            $this->nombre = $nombre;
        }

        public function getNombre(){
            return $this->nombre;
        }
    }
?>