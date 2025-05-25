<script lang="ts">
  import { writable, derived } from 'svelte/store';

  let { question, index, setAnswered } = $props();

  const selected = writable<number | null>(null);
  const answered = derived(selected, ($selected) => $selected !== null);
  const isCorrect = derived(selected, ($selected) => $selected === question.correctIndex);

  function handleClick(i: number) {
    selected.set(i);
    isCorrect.subscribe((ok) => setAnswered(index, ok))();
  }
</script>

<div class="card-wrapper flex-1">
  <div class="card flex-1 {$answered ? 'flipped' : ''}">
    <div class="front p-6">
      <p class="question-text">{question.question}</p>
      <div class="answer-container">
        {#each question.options as option, i}
          <button
            class="answer-btn"
            onclick={() => handleClick(i)}
            disabled={$answered}
          >
            {option}
          </button>
        {/each}
      </div>
    </div>

    <div class="back flex flex-col justify-between h-full p-6">
      <div>
        {#if $isCorrect}
          <p class="richtig">🎉 Richtig!!</p>
        {:else}
          <p class="falsch">❌ Falsch</p>
        {/if}
        <p class="mt-4 text-gray-700 text-base">{question.explanation}</p>
      </div>
    </div>
  </div>
</div>

<style>
  .question-text {
    perspective: 1000px;
    margin-bottom: 0.1rem;
  }

  .card-wrapper {
    perspective: 1000px;
  }

  .card {
    position: relative;
    width: 100%;
    min-height: 220px;
    transform-style: preserve-3d;
    transition: transform 0.6s ease;
    border-radius: 1.75rem;
    border-width: 0.2rem;
    border-color: #064216;
    margin-top: 0.1rem;
  }

  .card.flipped {
    transform: rotateY(180deg);
  }

  .front,
  .back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border: none;
    border-radius: 1.5rem;
    background: white;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1.5rem;
  }

  .back {
    transform: rotateY(180deg);
  }

  .answer-container {
    position: absolute;
    bottom: 1.5rem;
    left: 0;
    right: 0;
    padding: 0 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 1rem;
  }

  .answer-btn {
    font-size: 0.95rem;
    line-height: 1.5;
    font-weight: 450;
    background-color: #042809;
    color: #fff;
    padding: 0.75rem 1rem;
    text-align: center;
    border: none;
    cursor: pointer;
    transition: background-color 0.2s ease;
    width: 100%;
    min-height: 64px;
    border-radius: 0.5rem;
  }

  .answer-btn:hover:not(:disabled) {
    background-color: #064216;
  }

  .answer-btn:disabled {
    opacity: 0.6;
    cursor: default;
  }

  .falsch {
    color: #eb0803;
    font-weight: bold;
    font-size: larger;
  }

  .richtig {
    color: #137924;
    font-weight: bold;
    font-size: larger;
  }
</style>
