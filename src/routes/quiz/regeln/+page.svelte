<br>
<h1><strong>Lerne die Golfregeln</strong></h1>

<div class="grid">
  <a class="card" href="/rules/teil1">
    <h3 class="title">Teil I</h3>
    <hr class="divider" />
    <p class="text">Grundlagen des Spiels</p>
  </a>

  <a class="card" href="/rules/teil-2">
    <h3 class="title">Teil II</h3>
    <hr class="divider" />
    <p class="text">Spielverhalten & Etikette</p>
  </a>
</div>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    margin-top: 2rem;
  }

  .card {
    aspect-ratio: 1 / 1;
    background-color: #f5f5f5;
    border-radius: 12px;
    padding: 1rem;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-decoration: none;
    color: inherit;
    transition: transform 0.2s ease;
  }

  .card:hover {
    background-color: #e1f0e6;
    transform: scale(1.02);
    cursor: pointer;
  }

  .title {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  .divider {
    width: 75%;
    margin: 1rem auto;
    border: none;
    border-top: 1px solid #a6a5a5;
  }

  .text {
    margin-top: 0.5rem;
    font-size: 1.25rem;
  }
</style>
