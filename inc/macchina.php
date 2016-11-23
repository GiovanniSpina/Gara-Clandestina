<?php 

Class Macchina implements jsonSerializable{

	private $nome;
	private $colore;
	private $operazione=0;
	private $movimento =0;
	private $passi_i = 0;
	private $posizioni;
	private $numeri_rand;	

	public function Macchina($name,$color) {

		$this->nome = $name;
		$this->colore = $color; 
	}

	public function setMovimento(){

		for ($i = 0; $this->operazione < 100; $i++) {

			$this->movimento = rand(0,25);
			$this->operazione += $this->movimento;
			$this->numeri_rand[$i] = $this->operazione;
			$this->passi_i++;

		}	

		
	}
	
	public function getPassiTotali(){

		return $this->passi_i;
	}

	public function getPosizioni(){

		return $this->posizioni;
	}

	public function getNumeriRand(){

		return $this->numeri_rand;
	}


	public function jsonSerialize() {
		return Array (
			'nome'     => $this->nome,
			'colore'   => $this->colore,
			'passi'    => $this->passi_i,
			'numeri_rand' => $this->numeri_rand
			);
	}
}



