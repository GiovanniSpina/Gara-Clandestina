
document.addEventListener('DOMContentLoaded',main);
window.addEventListener('resize' ,posizione_div);

var invia = document.getElementsByName ("aggiungi_giocatore")[0];
controllo_nome = document.getElementsByName("nome1")[0];
controllo_colore = document.getElementsByName("colore1")[0];
var giocatore = 0;




function main() {

	posizione_div();
	invia.addEventListener('click', numero_giocatori);
	
	
	
}

function numero_giocatori(){

	if (controllo_nome != "" && controllo_colore != "") {

		giocatore++;
		if (giocatore>4) {

			alert("non puoi inserire più di 4 giocatori");
			giocatore=4;

		}

		else{


			document.getElementById("label_giocatori").innerHTML = "<h4>hai aggiunto il giocatore </h4>" + giocatore;
		} 

	} else{

		alert("non hai inserito i dati");
	}

}

function posizione_div(){

	var altezza_form = document.getElementById("form_1").offsetHeight/2;
	var altezza_window = window.innerHeight/2;
	form_1.style.marginTop = (altezza_window - altezza_form) + "px";




}


















