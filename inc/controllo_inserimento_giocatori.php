<?php

if(isset($_POST['giocatori'])) {

	include("macchina.php");
	$giocatori = json_decode($_POST['giocatori']);
	//echo gettype($giocatori);
	//echo "ho effettivamente settato qualcosa " . $_POST['giocatori'];
	for ($i=0; $i < count($giocatori); ++$i) { 
		$macchina[$i] = new Macchina($giocatori[$i]->name, $giocatori[$i]->color);
		
		
	}
	$macchinaVincitrice = $macchina[0];
	for ($i=0; $i < count($giocatori); ++$i) { 
		$macchina[$i]->setMovimento();
		if($macchina[$i]->getPassiTotali()<$macchinaV->getPassiTotali())	{
			$macchinaVincitrice = $macchina[$i]; 
		}	
	}

	for ($i=0; $i <count($giocatori) ; $i++) { 
		$nome_giocatore = $giocatori[$i]->name;
		echo json_encode($nome_giocatore)."". json_encode($macchina[$i]->getPosizioni());
	}

	
	

	echo "il vincitore è " . json_encode($macchinaVincitrice);	
}
