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

<div class="card-wrapper">
  <div class="card {$answered ? 'flipped' : ''}">
    <div class="card-inner">
      <div class="front">
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

      <div class="back">
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
  .card-wrapper {
    perspective: 1000px;
    width: 100%;
  }

  .card {
    width: 100%;
    border-radius: 1.75rem;
    border: 0.2rem solid #064216;
    margin-top: 1rem;
    overflow: hidden;
  }

  .card-inner {
    display: flex;
    flex-direction: column;
    transition: transform 0.6s ease;
    transform-style: preserve-3d;
    position: relative;
  }

  .card.flipped .card-inner {
    transform: rotateY(180deg);
  }

  .front,
  .back {
    backface-visibility: hidden;
    border-radius: 1.5rem;
    background: white;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
    padding: 1.5rem;
    width: 100%;
  }

  .front {
    display: flex;
    flex-direction: column;
  }

  .back {
    transform: rotateY(180deg);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    padding: 1.5rem;
  }

  .question-text {
    margin-bottom: 1rem;
    font-weight: bold;
    font-size: 1.1rem;
  }

  .answer-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 1rem;
    width: 100%;
  }

  .answer-btn {
    font-size: 0.95rem;
    line-height: 1.5;
    font-weight: 500;
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

  @media (max-width: 480px) {
    .question-text {
      font-size: 1rem;
    }

    .answer-btn {
      font-size: 0.9rem;
      padding: 0.6rem;
    }
  }
</style>
