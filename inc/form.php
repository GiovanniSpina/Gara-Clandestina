
<form method="POST"  id="form_1" action="./">


	<div id="form-container" class="text-center">
		
		<div id="variabile_num_giocatori"></div>

		<h1 id="titolo_gioco">CT Drift</h1>

		<div class="form-group col-md-4 col-md-offset-4">



			<label for="id_input"  class="text-border-1 text-border-2">inserisci nome:</label>	

			<input id="inserisci_nome" type="text" name="nome1" class="form-control">

		</div>

		<div class="form-group col-md-4 col-md-offset-4">

			<label for="id_input" class="text-border-1 text-border-2"> inserisci colore:</label>
			<input id="inserisci_colore" type="text" name="colore1" class="form-control">

		</div>

		<br>

		<div class="col-md-4 col-md-offset-4">

			<input id="player" type="button" class="btn btn-primary" name="aggiungi_giocatore" value="Aggiungi Giocatore">
			<button type="submit" class="btn btn-danger">Avvia Gara</button>

		</div>

		<br>

		<div id="label_giocatori">


		</div>

	</div>

</form>