<?php 

Class Macchina implements jsonSerializable{

	private $nome;
	private $colore;
	private $operazione=0;
	private $movimento =0;
	private $passi_i = 0;

	public function Macchina($name,$color) {

		$this->nome = $name;
		$this->colore = $color; 
	}

	public function setMovimento(){

		while ($this->operazione < 100) {

			$this->movimento = rand(0,25);
			$this->operazione += $this->movimento;
			$this->passi_i++;
			echo $this->operazione;

		}	



	}	
	public function getPassiTotali(){

		return $this->passi_i;
	}

	public function jsonSerialize() {
		return Array (
			'nome'     => $this->nome,
			'colore'   => $this->colore,
			'passi'    => $this->passi_i
			);
	}
}



