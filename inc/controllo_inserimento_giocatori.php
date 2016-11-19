<?php

if(isset($_POST['giocatori'])) {

	include("macchina.php");
	$giocatori = json_decode($_POST['giocatori']);
	for ($i=0; $i < count($giocatori); ++$i) { 
		$macchina[$i] = new Macchina($giocatori[$i]->name, $giocatori[$i]->color);
		
		
	}
	$macchinaVincitrice = $macchina[0];
	for ($i=0; $i < count($giocatori); ++$i) { 
		$macchina[$i]->setMovimento();
		if($macchina[$i]->getPassiTotali()<$macchinaVincitrice->getPassiTotali())	{
			$macchinaVincitrice = $macchina[$i]; 


		}	

		echo json_encode($macchina);
	}

}
