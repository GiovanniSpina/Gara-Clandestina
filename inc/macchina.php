<?php 

Class Macchina {

	private $nome;
	private $colore;
	private $stato;
	private $velocita;


	public function Macchina($name,$color) {

		$this->stato = 'spenta';
		$this->nome = $name;
		$this->colore = $color; 
	}

	public function metti_in_moto(){

		if($this->stato === 'spenta'){

			$this->stato = 'accesa';
			$this->velocita = 0;
		}

	}	

}



