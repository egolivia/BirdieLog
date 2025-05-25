<script>
  const { club } = $props();
</script>

<a href={`/clubs/${club._id}`} class="text-decoration-none">
  <div class="card my-2 club-card">
    <img
      src={club.image}
      alt={`Bild von ${club.clubName}`}
      class="card-img-top"
      style="object-fit: cover; height: 180px;"
    />
    <div class="card-body">
      <h5 class="card-title title">{club.clubName}</h5>
      <p class="card-text d-flex align-items-center gap-2">
        <i class="bi bi-geo-alt-fill" style="color:white"></i>
        <span class="text-white">{club.location}</span>
      </p>
    </div>
  </div>
</a>

<style>
  .club-card {
    background-color: #072d0a;
    color: aliceblue;
    border: 2px solid #09440e;
    border-radius: 0.5em;
    height: 100%;
    font-family: "Segoe UI", sans-serif;
  }

  .title {
    font-weight: bold;
    color: aliceblue;
  }
</style>
