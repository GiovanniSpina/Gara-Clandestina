
document.addEventListener('DOMContentLoaded', main);
window.addEventListener('resize', posizione_div);

var invia = document.getElementsByName ("aggiungi_giocatore")[0];
var avvia_gara = document.getElementById("avvia");
var altezza_form = document.getElementById("form_1").offsetHeight/2;
var altezza_window = window.innerHeight/2;
var elemento = 0;
var giocatore = [];
var controllo_gara = false;
lunghezza_percorso = window.innerWidth - 500;
var ritarda_animazione;
var numero_macchine = 0;
var j = 0;
var i = 0;
var sound = document.createElement("audio");
sound.src = "assets/musica/musica_gioco.wav";



function onRequestStateChange(){
	if (this.readyState === 4 && this.status === 200 ) {
		console.log(this.responseText);
		visualizza_in_js(this.response);
	}

	
}

function visualizza_in_js(risposta){
	//ritarda_movimento = setInterval(visualizza_in_js.bind(this,risposta), 700);	
	risposta = JSON.parse(risposta);
	for (var i = 0; i < risposta.length; i++) {
		document.getElementById("form-container").style.display = "none";
		form_1.style.marginTop = 200 + "px";
		if (risposta[i].colore === "blu") {
			document.getElementById("mostra_gara").innerHTML += "<div id='div_partecipante' class='row'> <label class ='text-border-1 text-border-2'>" + risposta[i].nome + "</label>" +"<br>"+ "<img name='piloti' style =' width: 200px; position: relative;' id='sfondo_gara' src ='assets/img/macchina_blu.png'> </div>";	
		}
		else{

			if (risposta[i].colore == "rosso") {

				document.getElementById("mostra_gara").innerHTML += "<div id='div_partecipante' class='row'> <label class ='text-border-1 text-border-2'>" + risposta[i].nome + "</label>" +"<br>"+ "<img name='piloti' style =' width: 200px; position: relative;' id='sfondo_gara' src ='assets/img/macchina_rossa.png'> </div>";	

			}
			else{

				if (risposta[i].colore == "giallo") {

					document.getElementById("mostra_gara").innerHTML += "<div id='div_partecipante' class='row'> <label class ='text-border-1 text-border-2'>" + risposta[i].nome + "</label>" +"<br>"+ "<img name='piloti' style =' width: 200px; position: relative;' id='sfondo_gara' src ='assets/img/macchina_gialla.png'> </div>";	

				}
				else{

					if (risposta[i].colore == "verde") {

						document.getElementById("mostra_gara").innerHTML += "<div id='div_partecipante' class='row'> <label class ='text-border-1 text-border-2'>" + risposta[i].nome + "</label>" +"<br>"+ "<img name='piloti' style =' width: 200px; position: relative;' id='sfondo_gara' src ='assets/img/macchina_verde.png'> </div>";	

					}

				}

			}
		}
	}

	ritarda_animazione = setInterval(gara.bind(this, risposta), 700);
}

function gara (risposta){

	
	
		//for (var i = 0 , j = 0; i < risposta.length; j++) {}
		if(numero_macchine < risposta.length){

			/*controllo inutile perchè numeri_rand sarà quasi sempre maggiore di passi*/	
			for (i = 0; i<risposta.length ; i++) {
				
				if (risposta[i].distanza_percorsa != -1) {
					if (j < risposta[i].distanza_percorsa) {
						
						spostamenti_in_pixel = (lunghezza_percorso * risposta[i].numeri_rand[j])/100;
						document.getElementsByName("piloti")[i].style.left = spostamenti_in_pixel + "px";

					}

					else{

						numero_macchine ++;
						risposta[i].distanza_percorsa = -1;
					}
				} 

			}

			j++;


		}
		else{

			clearInterval(ritarda_animazione);
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

		var sound = new Audio('assets/musica/musica_start.mp3');
		sound.play;
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

		
		form_1.style.marginTop = (altezza_window - altezza_form) + "px";


	}

	

	


	
















