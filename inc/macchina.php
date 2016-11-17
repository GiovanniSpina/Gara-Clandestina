<?php 

Class Macchina implements jsonSerializable{

	private $nome;
	private $colore;
	private $operazione=0;
	private $movimento =0;
	private $passi_i = 0;
	private $posizioni = array();
    private $valore_minore;
    private $valore_maggiore;

	public function Macchina($name,$color) {

		$this->nome = $name;
		$this->colore = $color; 
	}

	public function setMovimento(){

		while ($this->operazione < 100) {

			$this->movimento = rand(0,25);
			$this->operazione += $this->movimento;
			$this->passi_i++;

		}	

		for ($i=0; $i != $this->passi_i ; $i++) { 
			$this->posizioni[$i] = $this->passi_i;
		}	

		
	}
	
	public function getPassiTotali(){

		return $this->passi_i;
	}

	public function getPosizioni(){

		return $this->posizioni;
	}


	public function jsonSerialize() {
		return Array (
			'nome'     => $this->nome,
			'colore'   => $this->colore,
			'passi'    => $this->passi_i
			);
	}
}



