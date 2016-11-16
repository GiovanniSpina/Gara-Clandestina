<?php

if(isset($_POST['num_giocatori'])) {
	
	$num_giocatori = $_POST['num_giocatori'];
	//echo "ho effettivamente settato qualcosa " . $_POST['num_giocatori'];
	for ($i=0; $i < $num_giocatori ; $i++) { 
		$macchina[$i] = new Macchina($_POST['nome1'],$_POST['colore1']);
	}
	
}
