<div id="contenitore" class ="container">
	
	<div class="row text-center">

		<div id="form-container" class="col-md-4 col-md-offset-4">

			<form method="POST"  id="form_1" onsubmit="return false; ">

		<h1>CT Drift</h1>

				<div class="form-group">

					<label for="id_input"  class="text-border-1 text-border-2">inserisci nome:</label>	

					<input id="inserisci_nome" type="text" name="nome1" class="form-control">

				</div>


				<div class="form-group">

					<label class="text-border-1 text-border-2" for="sel1">scegli colore:</label>
					<select id="inserisci_colore" name="colore1" class="form-control" type="text">
						<option>blu</option>
						<option>rosso</option>
						<option>verde</option>
						<option>giallo</option>
					</select>

				</div>

				<div class= "form-group" >
					<input id="player" type="button" class="btn btn-primary" name="aggiungi_giocatore" value="Aggiungi Giocatore">
					<button id="avvia" type="submit" class="btn btn-danger">Avvia Gara</button>
				</div>

				<div class="row" id="label_giocatori">


				</div>

			</form>

		</div>

	</div>
	<div id="gara" class="row">
		<div class="col-md-8 col-md-offset-2">
			<div id="mostra_gara"></div>
		</div>
	</div>

</div>