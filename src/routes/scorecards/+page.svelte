<script>
  const { data } = $props();
  let scorecards = [...data.scorecards];

  let sortField = 'date';
  let sortDirection = 'desc';

  function sortBy(field) {
    if (sortField === field) {
      sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      sortField = field;
      sortDirection = 'asc';
    }

    scorecards.sort((a, b) => {
      const aVal = a[field];
      const bVal = b[field];

      if (aVal < bVal) return sortDirection === 'asc' ? -1 : 1;
      if (aVal > bVal) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }
</script>

<div class="titel-teilX">
<div class="container-fluid mb-4">
  <div class="d-flex justify-content-between align-items-center">
    <h1 class="titel">Scorecards</h1>
<hr class="border-top border-dark my-3" />
    <a href="/scorecards/new" class="btn btn-success">Neue Scorecard erfassen</a>
  </div>
</div>
</div>


<table class="tabelle table table-hover align-middle">
  <thead>
    <tr>
      <th onclick={() => sortBy('date')} style="cursor: pointer">Datum</th>
      <th onclick={() => sortBy('clubName')} style="cursor: pointer">Golfclub</th>
      <th onclick={() => sortBy('scoreTotal')} style="cursor: pointer">Score</th>
    </tr>
  </thead>
  <tbody>
    {#each scorecards as card}
      <tr onclick={() => window.location.href = `/scorecards/${card._id}`} style="cursor:pointer">
        <td>{card.date}</td>
        <td>{card.clubName}</td>
        <td class="score">{card.scoreTotal}</td>
      </tr>
    {/each}
  </tbody>
</table>

<style>
  .titel {
    font-family: 'Segoe UI', sans-serif;
    color: #052808;
  }

  .tabelle {
    width: 100%;
    background-color: #f9f9f9;
    color: #000;
    border-collapse: collapse;
    border-radius: 8px;
    overflow: hidden;
    font-size: 0.95rem;
  }

  .tabelle th,
  .tabelle td {
    padding: 10px 12px;
    text-align: left;
    border-bottom: 1px solid #ccc;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .tabelle tr:hover {
    background-color: #e6f0e6;
  }

  .tabelle th {
    background-color: #e0e0e0;
    font-weight: 600;
    user-select: none;
  }

  .tabelle td:nth-child(1) {
    width: 110px;
  }

  .tabelle td:nth-child(2) {
    width: 200px;
  }

  .tabelle td:nth-child(3),
  .score {
    width: 80px;
    text-align: center;
    vertical-align: middle;
  }
</style>

