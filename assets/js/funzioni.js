
document.addEventListener('DOMContentLoaded', main);
window.addEventListener('resize', posizione_div);

var invia = document.getElementsByName ("aggiungi_giocatore")[0];
var avvia_gara = document.getElementById("avvia");
var elemento = 0;
var giocatore = [];
var controllo_gara = false;
var spostamenti_in_pixel = 0;
var ritarda_movimento = 0;
var numero_macchine = 0;
function onRequestStateChange(){
	if (this.readyState === 4 && this.status === 200 ) {
		visualizza_in_js(this.response);
	}

	
}

function visualizza_in_js(risposta){
	spostamenti_in_pixel = window.innerHeight - 200;
	//ritarda_movimento = setInterval(visualizza_in_js.bind(this,risposta), 700);
	risposta = JSON.parse(risposta);
	for (var i = 0; i < risposta.length; i++) {
		document.getElementById("form-container").style.display = "none";
		document.getElementById("mostra_gara").innerHTML += "<div id='piloti' class='row'> <label class ='text-border-1 text-border-2'>" + risposta[i].nome + "</label>" +"<br>"+ "<img id='sfondo_gara' src ='assets/img/macchina_gara.jpg'> </div>";	
	}

	gara(risposta);
}

function gara (risposta){

	if ( numero_macchine < risposta.length){

		for (var i = 0 , j = 0; i < risposta.length; i++) {

			if (risposta[i].passi_i != -1) {

				while (risposta[i].numeri_rand[j] < risposta[i].passi_i) {
					spostamenti_in_pixel = (spostamenti_in_pixel * risposta[i].numeri_rand[j])/100;
					document.getElementById("piloti").style.left = spostamenti_in_pixel + "px";
					j++;
					console.log(risposta[i].passi_i);
					console.log(spostamenti_in_pixel);
				}
			}

			else{				

				console.log("qualcosa non va");

			}
		}

	}
}


function onAvviaGaraClick(){


	if (controllo_gara == false) {
		
		controllo_gara = true;
		if (elemento>=2) {

			var fd = new FormData();
			fd.append("giocatori", JSON.stringify(giocatore));
			console.log(giocatore)
			var URL = 'inc/controllo_inserimento_giocatori.php';
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


















