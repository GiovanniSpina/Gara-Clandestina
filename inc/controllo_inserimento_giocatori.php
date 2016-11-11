<?php

function controllo_giocatori(){
	if (!isset($_GET['nome1']) && !isset($_GET['colore1'])){

		echo "devi ancora inserire i dati dei giocatori";
	}	
	else{

		echo "hai inserito i dati";
	}
}
?>
