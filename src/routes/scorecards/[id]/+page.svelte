<script>
  const { data } = $props();
  const { scorecard, club } = data;
</script>

  <a href="/scorecards" class="btn btn-outline-dark mb-4">← Zurück zur Übersicht</a>

{#if scorecard && club}
<!-- LOGO -->
<div class="logo-wrapper">
  <img src={club.image} alt={`Logo von ${club.clubName}`} class="logo" />
  <div class="club-name">Deine Runde im {club.clubName}</div>
  <div class="scorecard-date">
    vom {new Date(scorecard.date).toLocaleDateString('de-CH', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })}
  </div>
</div>

<hr class="border-t border-gray-600 my-4" />

<!-- SPALTEN -->
<div class="container">
  <div class="row">
    <!-- Linke Spalte -->
    <div class="col-md-6 mb-4">
      <br>
      <h3>Dein Resultat</h3>
      <h1>{scorecard.scoreTotal}</h1>
      <p>auf einem Par {club.par}</p>
      <br>
      <h5>Kommentar</h5>

      <!-- Kommentaranzeige -->
      <div class="comment-card">
        <p>{scorecard.comment || "Kein Kommentar vorhanden."}</p>
      </div>
    </div>

    <!-- Rechte Spalte -->
    <div class="col-md-6 mb-4">
      <br>
      <h3>Schläge pro Loch</h3>
      <table class="score-table-horizontal">
        <thead>
          <tr><th colspan="9">Front 9</th></tr>
          <tr>
            {#each scorecard.scores.slice(0, 9) as _, index}
              <th>Loch {index + 1}</th>
            {/each}
          </tr>
        </thead>
        <tbody>
          <tr>
            {#each scorecard.scores.slice(0, 9) as score}
              <td>{score}</td>
            {/each}
          </tr>
        </tbody>

        <thead>
          <tr><th colspan="9">Back 9</th></tr>
          <tr>
            {#each scorecard.scores.slice(9, 18) as _, index}
              <th>Loch {index + 10}</th>
            {/each} 
          </tr>
        </thead>
        <tbody>
          <tr>
            {#each scorecard.scores.slice(9, 18) as score}
              <td>{score}</td>
            {/each}
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

<form method="POST">
  <button type="submit" name="delete" class="btn btn-danger">
    Scorecard löschen
  </button>
</form>


{:else}
  <p class="text-white text-center mt-10">❗ Scorecard wurde nicht gefunden.</p>
{/if}

<style>
  .logo-wrapper {
    text-align: center;
    margin-bottom: 2rem;
    
  }

  .logo {
    width: 240px;
    height: auto;
    border-radius: 0.25rem;
    
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }

  .club-name {
    font-size: 2.5rem;
    font-weight: normal;
    font-family: 'Segoe UI', sans-serif;
    color: 09440e;
  }

  .scorecard-date {
    font-size: 1.25rem;
    font-weight: normal;
    font-family: 'Segoe UI', sans-serif;
    color: 09440e;
  }

  .score-table-horizontal {
    width: 100%;
    border-collapse: collapse;
    color: rgb(9, 61, 24);
    font-size: 0.9rem;
  }

  .score-table-horizontal th,
  .score-table-horizontal td {
    border: 2px solid #4f78537b;
    padding: 0.5rem;
    text-align: center;
  }

  .score-table-horizontal th {
    background-color: #b7cab9a9;
  }

  .comment-card {
    margin-top: 2rem;
    padding: 1rem;
    background-color: #b7cab9a9;
    border: 2px solid #4f78537b;
    border-radius: 0.5rem;
    color: 09440e;
  }
</style>