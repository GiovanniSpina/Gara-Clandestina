<?php
if(isset($_POST['giocatori'])) {
	include("inc/class/Macchina.php");
	$giocatori = json_decode($_POST['giocatori']);
	for ($i=0; $i < count($giocatori); ++$i) { 
		$macchina[$i] = new Macchina($giocatori[$i]->name, $giocatori[$i]->color);
		$macchina[$i]->Movimento();
		$macchina[$i]->getPassiTotali();	
	}
	echo json_encode($macchina);
}




