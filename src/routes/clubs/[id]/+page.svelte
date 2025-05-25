<script>
  const { data } = $props();
  const club = data.club;
</script>


  <a href="/clubs" class="btn btn-outline-dark mb-4">← Zurück zur Übersicht</a>



<div class="logo-wrapper">
  <img
    src={club.image}
    alt={`Logo von ${club.clubName}`}
    class="logo"
  />
  <div class="club-name">{club.clubName}</div>
</div>

<hr class="border-t border-dark-600 my-4" />

<div class="row">
  <div class="col-md-3">
    <br>
    <br>
    <br>
    <h5><strong>Allgemeine Informationen</strong></h5>
    <p><strong>Ort:</strong> {club.location}</p>
    <p><strong>Par:</strong> {club.par}</p>
    <p><strong>Baujahr:</strong> {club.yearBuilt}</p>
  </div>
  <div class="col-md-9">
    <br>

    <h4 style="text-align: center;"><strong>Golfplatz Plan</strong></h4>
    <br>
    {#if club.layout}
      <div class="layout-wrapper">
        <img
          src={club.layout}
          alt={`Layout von ${club.clubName}`}
          class="layout"
        />
      </div>
    {/if}
  </div>
</div>







<style>
  .logo-wrapper {
    text-align: center;
    margin-bottom: 2rem;
  }

  .logo {
    width: 120px;
    height: auto;
    border-radius: 0.25rem;
    margin-bottom: 0.5rem;
  }

  .club-name {
    font-size: 2.5rem;
    font-weight: normal;
    color: 072d0a;
  }

  .layout-wrapper {
    margin-top: rem;
    text-align: center;
   
  }

  .layout {
    width: 90%;
    max-width: 900px;
    height: auto;
    border-radius: 0.5rem;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  }
  .row{
    display: flex;
    align-items: flex-start;
  }

  p {
    margin: 0.25rem 0;
  }
  .border-t {
    color: green;
  }


</style>