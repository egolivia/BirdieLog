<script>
  import ClubCard from "$lib/components/ClubCard.svelte";
  const { data } = $props();
</script>
<br>
<h1 class="mb-4">Alle Golfclubs</h1>

<div class="row">
  {#each data.clubs as club}
    <div class="col-sm-6 col-md-4 col-lg-3 mb-4">
      <ClubCard {club} />
    </div>
  {/each}
</div>
