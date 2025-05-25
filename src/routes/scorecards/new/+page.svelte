<script>
  const { data } = $props();
  const { scorecards, clubs } = data;
</script>
<a href="/scorecards" class="btn btn-outline-dark mb-4">← Zurück zur Übersicht</a>


<form method="POST" class="container mt-5 p-4 bg-light rounded shadow-sm" style="color: black;">
  <h2 class="mb-4 text-center">Neue Scorecard erfassen</h2>

  <div class="row mb-3">
    <div class="col-md-6">
      <label for="date" class="form-label">Datum</label>
      <input type="date" name="date" id="date" required class="form-control" />
    </div>

    <div class="col-md-6">
      <label for="clubID" class="form-label">Golfclub</label>
      <select name="clubID" id="clubID" class="form-select" required>
        {#each clubs as club}
          <option value={club._id}>{club.clubName}</option>
        {/each}
      </select>
    </div>
  </div>

  <div class="row mb-4">
    <div class="col-12">
    <label for="score" class="form-label">Score pro Loch</label>  
      <div class="row">
        {#each Array(18) as _, i}
          <div class="col-2 mb-2">
            <input
              type="number"
              name="scores[]"
              min="1"
              required
              class="form-control"
              placeholder={`Loch ${i + 1}`}
            />
          </div>
        {/each}
      </div>
    </div>
  </div>

  <div class="row mb-3">
    <div class="col-md-12">
      <label for="comment" class="form-label">Kommentar</label>
      <textarea name="comment" id="comment" rows="2" class="form-control"></textarea>
    </div>
  </div>

  <div class="text-center">
    <button type="submit" class="btn btn-success px-4">Speichern</button>
  </div>
</form>
