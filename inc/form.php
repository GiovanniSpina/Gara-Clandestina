
<div class="container">
	<div class="row">

		<form method="POST"  id="form_1" onsubmit="return false;">

			<div class="text-center">

				<h1 id="titolo_gioco">CT Drift</h1>


			</div>


			<div id="form-container" class="text-center">

				<div class="row ">

					<div class="form-group">

						<div class="col-md-4 col-md-offset-4">

							<label for="id_input"  class="text-border-1 text-border-2">inserisci nome:</label>	

							<input id="inserisci_nome" type="text" name="nome1" class="form-control">

						</div>
					</div>
				</div>

				<div class="row ">
					<div class="form-group">
						<div class="col-md-4 col-md-offset-4">
							<label class="text-border-1 text-border-2" for="sel1">scegli colore:</label>
							<select id="inserisci_colore" name="colore1" class="form-control" type="text">
								<option>blu</option>
								<option>rosso</option>
								<option>verde</option>
								<option>giallo</option>
							</select>
						</div>
					</div>
				</div>

				<br>

				<div class= "row">
					<div class="col-md-4 col-md-offset-4">
						<input id="player" type="button" class="btn btn-primary" name="aggiungi_giocatore" value="Aggiungi Giocatore">
						<button id="avvia" type="submit" class="btn btn-danger">Avvia Gara</button>
					</div>
				</div>

				<br>

				<div class="row" id="label_giocatori">


				</div>

			</div>

		</form>
		</div>
</div>