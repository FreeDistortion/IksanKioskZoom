<script>
  import mapEat from "$lib/images/map_eat.png";
</script>

<main>
  <!-- svelte-ignore a11y-missing-attribute -->
  <div class="main-container">
    <div class="contents-container">
      <div class="go-to-heaven asite">
        <div class="f-panzoom">
          <img src={mapEat} alt="" />
        </div>
      </div>

      <div class="go-to-heaven bsite"></div>
      <div class="go-to-heaven csite"></div>
    </div>

    <a href="/">
      <div class="come-back-home" />
    </a>
    <a href="/about/csite">
      <div class="come-back-home prev" />
    </a>
    <a href="/about/bsite">
      <div class="come-back-home next" />
    </a>
  </div>
</main>

<style>
  main {
    margin: -8px;
    text-align: center;
  }
  .main-container {
    background-image: url("$lib/images/detailBackImg.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
    width: 1080px;
    height: 1920px;
  }
  .contents-container {
    position: absolute;
    /* background: hsl(239, 100%, 50%); */
    width: 1080px;
    height: 1400px;
    left: 50%;
    top: 160px;
    transform: translate(-50%, 0%);
  }
  .go-to-heaven {
    position: absolute;
    /* background: hsl(175, 100%, 50%); */
  }
  /* from the top make it hot it's a wrep */
  .asite {
    width: 100%;
    height: 850px;
    left: 50%;
    top: 0%;
    transform: translate(-50%, 0%);
  }
  /* from the bot make it hot it's a wrep */
  .bsite {
    width: 100%;
    height: 30%;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, -0%);
  }
  .come-back-home {
    position: absolute;
    background: #42ff00;
    width: 400px;
    height: 150px;
    left: 50%;
    top: 90%;
    transform: translate(-50%, -0%);
  }
  .prev {
    width: 200px;
    left: 15%;
    transform: translate(-50%, -0%);
  }
  .next {
    width: 200px;
    left: 85%;
    transform: translate(-50%, -0%);
  }
</style>
