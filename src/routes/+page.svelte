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


<div class="container-fluid">
  <div class="row">
    <!-- Linke Spalte: Video -->
    <div class="col-12 col-lg-6 mb-4">
      <div class="video">
        <video class="w-100" controls autoplay loop muted playsinline>
          <source src="/images/media/BirdieLogVideo.mp4" type="video/mp4" />
          <track kind="captions" src="/videos/untertitel.vtt" srclang="de" label="Deutsch" />
        </video>
      </div>
    </div>

    <!-- Rechte Spalte: Cards -->
    <div class="col-12 col-lg-6 mb-4">
      <!-- Card 1 -->
      <div class="card w-100 mb-4">
        <div class="card-body">
          <h4 class="card-title">Was ist ein Birdie?</h4>
          <hr class="custom-divider" />
          <div class="text">Im Golfsport wird das Ergebnis an einem Loch Birdie genannt, wenn ...</div>
        </div>
      </div>

      <!-- Card 2 -->
      <div class="card w-100 mb-4">
        <div class="card-body">
          <h4 class="card-title">Warum ist BirdieLog entstanden?</h4>
          <hr class="custom-divider" />
          <div class="text">BirdieLog ist das Resultat aus meinem naiven Golf-Anfänger-Optimismus ...</div>
        </div>
      </div>

      <!-- Card 3 -->
      <div class="card w-100 mb-4">
        <div class="card-body">
          <h4 class="card-title">⛳ Exkurs - Golfbegriffe</h4>
          <hr class="custom-divider" />
          <div class="text">
            <ul class="golf-begriffe">
              <li><strong>Eagle:</strong> 2 Schläge unter Par – für Hobbygolfer kaum möglich.</li>
              <li><strong>Birdie:</strong> 1 Schlag unter Par – mit viel Glück machbar.</li>
              <li><strong>Par:</strong> Vorgabe, wie viele Schläge ein sehr guter Spieler für ein Loch braucht.</li>
              <li><strong>Bogey:</strong> 1 Schlag über Par – kommt oft vor.</li>
              <li><strong>Double Bogey:</strong> 2 Schläge über Par – passiert.</li>
              <li><strong>Triple Bogey:</strong> 3 Schläge über Par – tut weh.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .golf-begriffe li {
    margin-bottom: 0.5rem;
  }
  .header {
    font-size: 4rem;
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .card-title {
    font-size: 1.2rem;
    font-weight: bold;
    font-family: 'Segoe UI', sans-serif;
    line-height: 1.6;
    margin-bottom: 1rem;
    margin-top: 1rem;
    text-align: center;
  }
  .custom-divider {
    border-top: 2.5px solid #13431b;
    width: 100%;
    margin-bottom: 2rem;
  }
  .ueberschrift {
    font-size: 1.0rem;
    line-height: 1.5;
    padding-right: 2rem;
    font-weight: bold;
    margin-top: 1rem;
    margin-bottom: 0.1rem;
  }
  .text {
    font-size: 0.95rem;
    line-height: 1.5;
    padding-right: 2rem;
    font-weight: 300;
    margin-top: 0.2rem;
    margin-bottom: 1rem;
  }
  .card-body {
    font-size: 0.85rem;
    line-height: 1.4;
    padding-left: 2rem;
    padding-right: 2rem;
    text-align: justify;
    font-weight: 300;
    margin-bottom: 0.3rem;
    margin-top: 0.3rem;
  }
  .video video {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

</style>
