document.addEventListener('DOMContentLoaded', main);
window.addEventListener('resize', posizione_div);

var add_player_btn = document.getElementsByName ("aggiungi_giocatore")[0];
var start_race_btn = document.getElementById("avvia");

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

function main() {

	posizione_div();
	add_player_btn.addEventListener('click', numero_giocatori);
	start_race_btn.addEventListener('click', onAvviaGaraClick);
}

function onRequestStateChange() {

	if (this.readyState === 4 && this.status === 200 ) {
		console.log(this.responseText);
		visualizza_in_js(this.response);
	}

}

function visualizza_in_js(data) {

	data = JSON.parse(data);

	for (var i = 0; i < data.length; i++) {

		document.getElementById("form-container").style.display = "none";

		form_1.style.marginTop = 200 + "px";

		if (data[i].colore === "blu") {
			document.getElementById("mostra_gara").innerHTML += "<div id='div_partecipante'> <label class ='text-border-1 text-border-2'>" + data[i].nome + "</label>" +"<br>"+ "<img name='piloti' style = 'width: 150px; position: relative;' id='sfondo_gara' src ='assets/img/macchina_blu.png'> </div> <hr style='display: block;'>";
		} 
		else{

			if (data[i].colore == "rosso") {

				document.getElementById("mostra_gara").innerHTML += "<div id='div_partecipante'> <label class ='text-border-1 text-border-2'>" + data[i].nome + "</label>" +"<br>"+ "<img name='piloti' style =' width: 150px; position: relative;' id='sfondo_gara' src ='assets/img/macchina_rossa.png'> </div> <hr style='display: block;'>";

			}
			else{

				if (data[i].colore == "giallo") {

					document.getElementById("mostra_gara").innerHTML += "<div id='div_partecipante'> <label class ='text-border-1 text-border-2'>" + data[i].nome + "</label>" +"<br>"+ "<img name='piloti' style =' width: 150px; position: relative;' id='sfondo_gara' src ='assets/img/macchina_gialla.png'> </div> <hr style='display: block;'>";

				}
				else{

					if (data[i].colore == "verde") {

						document.getElementById("mostra_gara").innerHTML += "<div id='div_partecipante'> <label class ='text-border-1 text-border-2'>" + data[i].nome + "</label>" +"<br>"+ "<img name='piloti' style =' width: 150px; position: relative;' id='sfondo_gara' src ='assets/img/macchina_verde.png'> </div> <hr style='display: block;'>";

					}

				}

			}
		}
	}

	ritarda_animazione = setInterval(gara.bind(this, data), 700);
}

function gara (data) {

	if(numero_macchine < data.length) {

		for (i = 0; i< data.length; i++) {

			if (data[i].distanza_percorsa != -1) {

				if (j < data[i].distanza_percorsa) {

					spostamenti_in_pixel = (lunghezza_percorso * data[i].numeri_rand[j])/100;
					document.getElementsByName("piloti")[i].style.left = spostamenti_in_pixel + "px";

				}

				else {

					console.log(numero_macchine);

					if (numero_macchine === 0){
						document.getElementById("mostra_gara").innerHTML += "<div id='div_partecipante'><p class = 'bg-success'>" + (numero_macchine +1) + "°" + " " + "posizione: " + data[i].nome + "</p></div>";
					}
					else{
						document.getElementById("mostra_gara").innerHTML += "<div id='div_partecipante'><p class = 'bg-danger'>" + (numero_macchine +1) + "°" + " " + "posizione: " + data[i].nome + "</p></div>";
					}

					numero_macchine ++;

					data[i].distanza_percorsa = -1;

				}
			} 

		}

		j++;

	}
	else {

		clearInterval(ritarda_animazione);

	}

}

function onAvviaGaraClick() {

	if (controllo_gara == false) {

		controllo_gara = true;

		document.body.backgroundColor = "grey";

		if (elemento>=2) {

			var fd = new FormData();
			fd.append("giocatori", JSON.stringify(giocatore));
			console.log(giocatore)
			var URL = 'api.php';
			var xmlRequest = new XMLHttpRequest();
			xmlRequest.addEventListener("readystatechange", onRequestStateChange);
			xmlRequest.open('POST', URL , true);
			xmlRequest.send(fd);
		}

		else {

			alert("devono esserci almeno due giocatori per avviare una gara");
			controllo_gara = false;

		}
	}

	else{

		alert("hai già avviato una gara");
	}

}

function numero_giocatori() {

	controllo_nome = document.getElementById("inserisci_nome").value;
	controllo_colore = document.getElementById("inserisci_colore").value;

	if (controllo_nome != "" && controllo_colore != "") {

		giocatore.push(
		{
			"name": controllo_nome,
			"color": controllo_colore 
		});

		elemento++;

		document.getElementById("inserisci_nome").value = "";
		document.getElementById("inserisci_colore").value = "blu";

		if (elemento>100) {

			elemento=100;
			alert("Non puoi inserire più di " + elemento + " giocatori.");

		}

		else {

			document.getElementById("label_giocatori").innerHTML = "<h4 style ='color: white;' class = 'text-border-1 text-border-2'> hai aggiunto il giocatore </h4>" + elemento;

		} 

	} else {

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

function posizione_div() {

	form_1.style.marginTop = (altezza_window - altezza_form) + "px";

}