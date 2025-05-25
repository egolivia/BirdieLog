<script lang="ts">
  import FragenCard from '$lib/components/FragenCard.svelte';
  import { writable } from 'svelte/store';
  import { onMount } from 'svelte';
  import { goto, invalidateAll } from '$app/navigation'; // ✅ hier importieren

  const { data } = $props();

  const correctAnswers = writable(0);
  const answered = writable<boolean[]>([]);
  const showResult = writable(false);

  onMount(() => {
    if (data?.questions?.length) {
      answered.set(Array(data.questions.length).fill(false));
    }
  });

  function setAnswered(index: number, isCorrect: boolean) {
    answered.update((arr) => {
      const copy = [...arr];
      copy[index] = true;
      return copy;
    });

    if (isCorrect) {
      correctAnswers.update((n) => n + 1);
    }
  }

  // ✅ HIER: Quiz neu laden mit neuen Fragen
  function restartQuiz() {
  location.reload(); // 💥 erzwingt kompletten Neuladevorgang
}

  function abschliessen() {
    showResult.set(true);
  }
</script>

<div class="titel-teilX">
<div class="container-fluid mb-4">
  <div class="d-flex justify-content-between align-items-center">
    <h2><strong>Quiz</strong></h2>
    <a href="/quiz" class="btn-abbrechen">Abbrechen</a>
  </div>
</div>
</div>


{#if $showResult}
  <div class="text-center mt-5">
    <p class="fs-4 fw-semibold text-success mb-3 text-dark">
      Du hast {$correctAnswers} von {data.questions.length} Fragen richtig beantwortet! 🎯
    </p>

    <div class="d-flex justify-content-center gap-3 mt-4">
      <button
        class="btn btn-primary"
        onclick={restartQuiz}
      >
        Quiz wiederholen
      </button>

      <a
        href="/quiz"
        class="btn btn-secondary"
      >
        Zurück zu den Regeln
      </a>
    </div>
  </div>

{:else}
  <div class="container mt-4">
    <div class="row g-4">
      {#each data.questions as question, i}
        <div class="col-12 col-md-6">
          <p class="frage-nummer">Frage {i + 1}</p>
          <FragenCard
            {question}
            index={i}
            setAnswered={setAnswered}
          />
        </div>
      {/each}
    </div>
  </div>

  {#if $answered.length === data.questions.length}
    <div class="d-flex justify-content-center mt-5">
      <button
        class="btn btn-lg text-white
          { $answered.every(Boolean)
            ? 'btn-success'
            : 'btn-secondary disabled'
          }"
        onclick={abschliessen}
        disabled={!$answered.every(Boolean)}
      >
        Abschliessen
      </button>
    </div>
  {/if}
{/if}
<br><br>
<br>

<style>
  .frage-nummer{
    font-size: 1.5rem;
    text-align: center;
    font-weight: bold;
    margin-top: 1.5rem;
    margin-bottom: 0.2rem;
  }
  .btn-abbrechen {
  color: #dc3545; /* Bootstrap's danger-red */
  border: 1.5px solid #dc3545;
  padding: 0.375rem 0.75rem;
  border-radius: 0.375rem;
  background-color: transparent;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s ease;
}

.btn-abbrechen:hover {
  background-color: #dc3545;
  color: white;
  text-decoration: none;
}
</style>