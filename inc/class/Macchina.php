<?php 
Class Macchina implements jsonSerializable {

	private $nome;
	private $colore;
	private $velocita = 0;
	private $cambiVelocita;

	const MIN_SPEED = 1;
	const MAX_SPEED = 15;

	const CAMBI_VELOCITA = 8;

	public function Macchina($name, $color) {

		$this->nome   = $name;
		$this->colore = $color;

	}

	public function Muovi() {

		for ($i = 0; count($this->cambiVelocita) < self::CAMBI_VELOCITA; $i++) {

			$this->velocita += rand(self::MIN_SPEED, self::MAX_SPEED);

			$this->cambiVelocita[$i] = $this->velocita;

		}
	}

	public function getCambiVelocita() {

		return 0; //Questo a cosa serve?

	}

	public function jsonSerialize() {

		return Array (
			'nome'     			=> $this->nome,
			'colore'   			=> $this->colore,
			'distanza_percorsa' => self::CAMBI_VELOCITA,
			'numeri_rand' 		=> $this->cambiVelocita
			);

	}
}



