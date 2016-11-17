
document.addEventListener('DOMContentLoaded', main);
window.addEventListener('resize', posizione_div);

var invia = document.getElementsByName ("aggiungi_giocatore")[0];
var avvia_gara = document.getElementById("avvia");
var elemento = 0;
var giocatore = [];
var controllo_gara = false;
function onRequestStateChange(){
	if (this.readyState === 4 && this.status === 200 ) {
		alert(this.responseText);
	}

	
}


function onAvviaGaraClick(){
	if (controllo_gara == false) {
		
		controllo_gara = true;
		if (elemento>=2) {

			var fd = new FormData();
			fd.append("giocatori", JSON.stringify(giocatore));
			console.log(giocatore)
			var URL = 'http://localhost:8080/webinar2/esercizio3/inc/controllo_inserimento_giocatori.php';
			var xmlRequest = new XMLHttpRequest();
			xmlRequest.addEventListener("readystatechange", onRequestStateChange);
			xmlRequest.open('POST', URL , true);
			xmlRequest.send(fd);
		
		}

		else{

			alert("devono esserci almeno due giocatori per avviare una gara");
			controllo_gara = false;
		}
	}

	else{

		alert("hai già avviato una gara");
	}

	
}


function main() {

	posizione_div();
	invia.addEventListener('click', numero_giocatori);
	avvia_gara.addEventListener('click', onAvviaGaraClick);

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
			alert("Non puoi inserire più di " + elemento + " giocatori.");
			

		}

		else{

			document.getElementById("label_giocatori").innerHTML = "<h4> hai aggiunto il giocatore </h4>" + elemento;



		} 


	} else{

		if (controllo_nome != ""  && controllo_colore == "") {
			alert("Devi assegnare un colore al giocatore per aggiungerlo alla gara.");
		}

		else{

			if (controllo_nome == ""  && controllo_colore != "") {

				alert("Devi assegnare un nome al giocatore per aggiungerlo alla gara.");
			}

			else{

				if (controllo_nome == ""  && controllo_colore == "") {

					alert("Devi assegnare dei dati al giocatore per aggiungerlo alla gara");
				}
			}
		}
	}

}

function posizione_div(){

	var altezza_form = document.getElementById("form_1").offsetHeight/2;
	var altezza_window = window.innerHeight/2;
	form_1.style.marginTop = (altezza_window - altezza_form) + "px";


}


















