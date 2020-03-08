<template>
  <main>
    <div class="layer layer--on-top">
      <header class="layer__content">Dragon Fest</header>
    </div>
    <div class="layer layer--on-bottom">
      <div class="layer__content">
        <div class="layer__text">
          O primeiro evento<br />
          de Dragon ball<br />
          no Algarve
        </div>
        <footer class="layer__footnote">Mais informações brevemente</footer>
      </div>
    </div>
    <div class="layer layer--for-mascot">
      <div class="layer__content">
        <picture>
          <source
            srcset="/img_dragon-fest_goku_mobile.png"
            media="(orientation: portrait)"
          />
          <img
            class="layer__mascot"
            src="/img_dragon-fest_goku_desktop.png"
            alt="SSJ Son Goku"
          />
        </picture>
      </div>
    </div>
  </main>
</template>

<style lang="postcss" scoped>
$screen-lg: 1025px;

@font-face {
  src: url("/Knockout-HTF69-FullLiteweight.otf");
  font-family: "Knockout";
}

@font-face {
  src: url("/Knockout-HTF29-JuniorLiteweight.otf");
  font-family: "Knockout-jr";
}

@font-face {
  src: url("/Knockout-HTF72-FullCruiserwt.otf");
  font-family: "Knockout-cr";
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

main {
  --font-size-base: 140px;
  --text-width: 60%;
  --mascot-width: 25vw;
  font-size: var(--font-size-base);

  display: flex;
  flex-direction: column;
  height: 100%;

  overflow: hidden;

  @media (max-width: $screen-lg) and (orientation: landscape) {
    --font-size-base: 12vw;
    --mascot-width: 30vw;
  }
}

.layer {
  text-transform: uppercase;
  transform: skew(0, -18deg);
}

.layer__content {
  position: relative;

  margin: auto;
  max-width: $screen-lg;
  width: 100%;

  @media screen and (orientation: landscape) {
    width: 85vw;
  }
}

.layer__text,
.layer__footnote {
  width: var(--text-width);
}

.layer--on-top {
  flex: 1.5;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  font-family: "Knockout";
  font-size: 1em;

  @media (orientation: portrait) {
    flex: 1;
  }
}

.layer--on-top .layer__content {
  margin-bottom: 0;
}

.layer--on-bottom {
  font-family: "Knockout-cr";
  color: white;
  background: black;
  flex: 3;
  padding: 24px 0;
}

.layer--on-bottom .layer__text {
  font-size: 0.35714em;
}

.layer__footnote {
  padding-top: 24px;
  font-family: "Knockout-jr";
  font-size: 0.2286em;
}

.layer__mascot {
  position: absolute;
  right: 0;
  bottom: 0;

  width: var(--mascot-width);
}

.layer--for-mascot {
  transform: none;
}

@media (max-width: $screen-lg) and (orientation: portrait) {
  main {
    --text-width: 40%;
    --font-size-base: 65px;
    --mascot-width: calc(95% - var(--text-width));
  }

  .layer__content {
    max-width: 85vw;
  }

  .layer__text br {
    display: none;
  }

  .layer--on-bottom .layer__text {
    font-size: 0.2769em;
    line-height: 1.5;
  }

  .layer__footnote {
    width: var(--text-width);
    padding-top: 16px;
    /* SHAME: not sure why, but I think it matched 18px; */
    font-size: 0.2462em;
  }

  .layer__mascot {
    right: -5%;
    max-width: none;
  }
}
</style>

<script lang="ts">
require("~/fonts/Knockout-HTF29-JuniorLiteweight.otf");
require("~/fonts/Knockout-HTF69-FullLiteweight.otf");
require("~/fonts/Knockout-HTF72-FullCruiserwt.otf");
require("~/images/img_dragon-fest_goku_desktop.png");
require("~/images/img_dragon-fest_goku_mobile.png");

export default {};
</script>
