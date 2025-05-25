<script>
  import "./styles.css";
  let { children } = $props();
  import { page } from '$app/stores';
</script>

<nav class="navbar navbar-expand-lg custom-navbar">
  <div class="container-fluid">
    <a class="navbar-brand d-flex align-items-center gap-2" href="/">
      <img
        src="/iconwhite.png"
        alt="BirdieLog Icon"
        width="24"
        height="24"
        style="border-radius: 4px"
      />
      BirdieLog
    </a>

    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav d-flex align-items-center">

        <div class="nav-divider"></div>

        <li class="nav-item">
          <a class="nav-link text-white" class:active={$page.url.pathname === '/clubs'} href="/clubs">Golfclubs</a>
        </li>

        <div class="nav-divider"></div>

        <li class="nav-item">
          <a class="nav-link text-white" class:active={$page.url.pathname === '/scorecards'} href="/scorecards">Scorecards</a>
        </li>

        <div class="nav-divider"></div>

        <li class="nav-item">
          <a class="nav-link text-white" class:active={$page.url.pathname === '/scorecards/graph'} href="/scorecards/graph">Scoreverlauf</a>
        </li>

        <div class="nav-divider"></div>

        <li class="nav-item">
          <a class="nav-link text-white" class:active={$page.url.pathname === '/quiz'} href="/quiz">Regeln & Quiz</a>
        </li>

        <div class="nav-divider"></div>

        <li class="nav-item">
          <a class="nav-link text-white" class:active={$page.url.pathname === '/videos'} href="/videos">Videos</a>
        </li>

        <div class="nav-divider"></div>

        <li class="nav-item">
          <a class="nav-link text-white" class:active={$page.url.pathname === '/quellen'} href="/quellen">Quellen</a>
        </li>

        <div class="nav-divider"></div>
        
      </ul>
    </div>
  </div>
</nav>

<div class="container mt-3">
  {@render children()}
</div>

<style>
  .navbar-toggler {
  border-color: rgba(255, 255, 255, 0.5); /* optional: weißer Rahmen */
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(255, 255, 255, 1)' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}
  .custom-navbar {
    background-color: #052808 !important;
  }

  .custom-navbar .nav-link {
    color: white !important;
  }

  .custom-navbar .navbar-brand {
    color: white !important;
  }

  .nav-link.active {
    font-weight: bold !important;
    border-bottom: 2px solid white !important;
  }

  .nav-divider {
    width: 1px;
    height: 20px;
    background-color: white;
    opacity: 0.5;
    margin: 0 0.75rem;
  }
</style>
