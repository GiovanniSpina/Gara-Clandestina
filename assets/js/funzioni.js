
document.addEventListener('DOMContentLoaded', main);
window.addEventListener('resize', posizione_div);

var invia = document.getElementsByName ("aggiungi_giocatore")[0];
var elemento = 0;
var giocatore = [];

function onRequestStateChange(){

	if (this.readystate === 4 && this.status === 200 ) {

		console.log(this.response);
	}

	
}

var fd = new FormData();
fd.append("proprieta_giocatori", giocatore);
var URL = 'http://localhost:8080/webinar2/esercizio3/inc/controllo_inserimento_giocatori.php';
var xmlRequest = new XMLHttpRequest();
xmlRequest.addEventListener("readystatechange", onRequestStateChange);
xmlRequest.open('POST', URL , true);
xmlRequest.send(fd);

function main() {

	posizione_div();
	invia.addEventListener('click', numero_giocatori);
	
	
}


function numero_giocatori(){



	controllo_nome = document.getElementById("inserisci_nome").value;
	controllo_colore = document.getElementById("inserisci_colore").value;
	if (controllo_nome != "" && controllo_colore != "") {
		giocatore.push(
		{
			"name": controllo_nome,
			"color": controllo_colore
		}
		);
		elemento++;
		document.getElementById("inserisci_nome").value = "";
		document.getElementById("inserisci_colore").value = "";
		if (elemento>100) {
			elemento=100;
			alert("non puoi inserire più di " + elemento + " giocatori");
			

		}

		else{

			document.getElementById("variabile_num_giocatori").innerHTML = "<input type ='hidden' name='num_giocatori' value='"+ elemento +"'>";
			document.getElementById("label_giocatori").innerHTML = "<h4> hai aggiunto il giocatore </h4>" + elemento;
		} 

	} else{

		alert("non hai inserito i dati del giocatore");
	}

}

function posizione_div(){

	var altezza_form = document.getElementById("form_1").offsetHeight/2;
	var altezza_window = window.innerHeight/2;
	form_1.style.marginTop = (altezza_window - altezza_form) + "px";


}


















