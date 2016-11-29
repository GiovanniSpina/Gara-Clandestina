<?php 
Class Macchina implements jsonSerializable{

	private $nome;
	private $colore;
	private $operazione=0;
	private $movimento =0;
	private $distanza_percorsa = 0;
	private $posizioni;
	private $numeri_rand;	

	public function Macchina($name,$color) {

		$this->nome = $name;
		$this->colore = $color; 
	}

	public function Movimento(){

		for ($i = 0; $this->operazione < 100; $i++) {

			$this->movimento = rand(0,15);
			$this->operazione += $this->movimento;

			if ($this->operazione > 100) {

          	$this->operazione = 100;
          	
          }
			$this->numeri_rand[$i] = $this->operazione;
			$this->distanza_percorsa ++;
          

		}


		
	}
	
	public function getPassiTotali(){

		return $this->distanza_percorsa;
	}


	public function jsonSerialize() {
		return Array (
			'nome'     => $this->nome,
			'colore'   => $this->colore,
			'distanza_percorsa'    => $this->distanza_percorsa,
			'numeri_rand' => $this->numeri_rand
			);
	}
}



