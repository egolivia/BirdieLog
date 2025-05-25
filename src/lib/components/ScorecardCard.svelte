<script>
  const { ScorecardCard } = $props();
</script>

<a class="scorecard-card" href={`/scorecards/${scorecard._id}`}>
  <div>
    <h3>{new Date(scorecard.date).toLocaleDateString('de-CH')}</h3>
    <p>Score: {scorecard.scoreTotal}</p>
    <p>{scorecard.comment || "Kein Kommentar"}</p>
  </div>
</a>

<style>
  .scorecard-card {
    display: block;
    padding: 1rem;
    margin-bottom: 1rem;
    background: #1f1f1f;
    border-radius: 0.5rem;
    color: white;
    text-decoration: none;
  }

  .scorecard-card:hover {
    background: #2c2c2c;
  }
</style>