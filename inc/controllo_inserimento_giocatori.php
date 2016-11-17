<?php

if(isset($_POST['giocatori'])) {
	include("http://localhost:8080/webinar2/esercizio3/inc/macchina.php");
	$giocatori = json_decode($_POST['giocatori']);
	echo gettype($giocatori);
	//echo "ho effettivamente settato qualcosa " . $_POST['giocatori'];
	for ($i=0; $i < count($giocatori); ++$i) { 
		$macchina[$i] = new Macchina($giocatori[$i]->name, $giocatori[$i]->color);
	}
	
}
