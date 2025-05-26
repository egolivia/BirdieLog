<h1 class="d-flex align-items-center gap-2">
  <img
    src="/icongreen.png"
    alt="BirdieLog Icon"
    width="54"
    height="54"
    style="border-radius: 4px"
  />
  <div class="header">Willkommen bei BirdieLog</div>
</h1>



<!-- 🔝 Erste Zeile mit Video & Zitat -->
<div class="container-fluid">
  <div class="row align-items-stretch mt-4 mb-4">
    <!-- Link: Video -->
    <div class="col-lg-8 mb-4">
      <div class="h-100 d-flex align-items-stretch">
        <video class="w-100 rounded" controls autoplay loop muted playsinline>
          <source src="/images/media/BirdieLogVideoStart.mp4" type="video/mp4" />
        </video>
      </div>
    </div>

    <!-- Rechts: Zitat -->
    <div class="col-lg-4 mb-4 d-flex">
      <div class="card w-100 h-100 d-flex flex-column justify-content-between">
        <!-- Bild -->
        <div class="p-3 d-flex justify-content-center">
          <img
            src="/images/apalmer.jpg"
            alt="Arnold Palmer"
            class="img-fluid rounded"
            style="max-height: 300px; object-fit: contain;"
          />
        </div>
        <!-- Zitat -->
        <div class="card-body d-flex flex-column justify-content-end">
          <blockquote class="golf-quote mb-0">
            “Golf is deceptively simple and endlessly complicated; it satisfies the soul and frustrates the intellect.  
            It is at the same time rewarding and maddening – and it is without a doubt the greatest game mankind has ever invented.”
            <span class="quote-author mt-3">– Arnold Palmer</span>
          </blockquote>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ⬇️ Drei Cards in einer Zeile -->
<div class="container">
  <div class="row mt-4 mb-4">
    <!-- Card 1 -->
    <div class="col-md-4 mb-4">
      <div class="card h-100">
        <div class="card-body">
          <h4 class="card-title">Was ist ein Birdie?</h4>
          <hr class="custom-divider" />
          <div class="text">
            Im Golfsport wird das Ergebnis an einem Loch Birdie genannt, wenn das Loch mit einem Schlag weniger beendet werden kann, als es der Platz vorgibt<sup>1</sup>.  
            Birdies sind der Grund, warum man als Amateur nicht gleich alles hinschmeißt. Sie verleihen diesem mehrheitlich frustrierenden Sport ein hohes Suchtpotenzial.
          </div>
        </div>
      </div>
    </div>

    <!-- Card 2 -->
    <div class="col-md-4 mb-4">
      <div class="card h-100">
        <div class="card-body">
          <h4 class="card-title">⛳ Exkurs – Golfbegriffe</h4>
          <hr class="custom-divider" />
          <ul class="golf-begriffe">
            <li><strong>Eagle:</strong> 2 Schläge unter Par – Fantasie.</li>
            <li><strong>Birdie:</strong> 1 Schlag unter Par – mit viel Glück machbar.</li>
            <li><strong>Par:</strong> Vorgabe für sehr gute Spieler (HCP 0).</li>
            <li><strong>Bogey:</strong> 1 Schlag über Par – kommt oft vor.</li>
            <li><strong>Double Bogey:</strong> 2 Schläge über Par – passiert.</li>
            <li><strong>Triple Bogey:</strong> 3 Schläge über Par – tut weh.</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Card 3 -->
    <div class="col-md-4 mb-4">
      <div class="card h-100">
        <div class="card-body">
          <h4 class="card-title">Warum ist BirdieLog entstanden?</h4>
          <hr class="custom-divider" />
          <div class="text">
            BirdieLog ist das Resultat einer idealistischen Golfanfängerin mit großen Plänen und wenig Birdies.  
            Geboren aus naivem Optimismus und realitätsferner „unternehmerischer Weitsicht“ – als Webanwendung, die jetzt schon bereit ist, Birdies zu loggen.  
            Auch wenn die Realität aktuell noch stark nach Bogey aussieht.
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .golf-begriffe li {
    margin-bottom: 0.5rem;
    font-size: 0.8rem;
  }

  .header {
    font-size: 3rem;
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 1.5rem;
  }
  .card{
    height: 100%; /* oder z. B. height: 500px; wenn du eine feste Höhe willst */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .card-title {
    font-size: 1.2rem;
    font-weight: bold;
    font-family: 'Segoe UI', sans-serif;
    line-height: 1.6;
    margin-bottom: 1rem;
    margin-top: 0.25rem;
    text-align: center;
  }

  .custom-divider {
    border-top: 2.5px solid #13431b;
    width: 100%;
    margin-bottom: 1rem;
  }

  .card-body {
    font-size: 0.9rem;
    line-height: 1.5;
    padding: 1.5rem 2rem;
    text-align: justify;
    font-weight: 300;
  }

  .golf-quote {
    font-style: italic;
    font-size: 0.9rem;
    font-weight: 500;
    color: #13431b;
    border-left: 3px solid #13431b;
    padding-left: 1rem;
    margin-top: 1.0rem;
    margin-bottom: 0.5rem;
  }

  .quote-author {
    display: block;
    margin-top: 0.2rem;
    font-weight: 400;
    font-size: 0.85rem;
    color: #333;
  }

  .card img {
  max-height: 300px;
  width: auto;
  height: auto;
  max-width: 100%;
  object-fit: contain;
  padding: 1.5rem;
}

  video {
    border-radius: 8px;
    object-fit: cover;
  }
</style>
