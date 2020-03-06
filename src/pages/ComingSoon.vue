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

<style>
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

html {
  --font-size-base: 140px;
  font-size: var(--font-size-base);

  @media (max-width: $screen-lg) and (orientation: portrait) {
    --font-size-base: 65px;
  }

  @media (max-width: $screen-lg) and (orientation: landscape) {
    --font-size-base: 7vw;
  }
}

main {
  display: flex;
  flex-direction: column;
  height: 100%;

  overflow: hidden;
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

  @media (max-width: $screen-lg) and (orientation: portrait) {
    max-width: 85vw;
  }

  @media (max-width: $screen-lg) and (orientation: landscape) {
    max-width: 85vw;
  }
}

.layer__text {
  width: 60%;

  @media (max-width: $screen-lg) and (orientation: portrait) {
    width: 40%;

    br {
      display: none;
    }
  }
}

.layer--on-top {
  flex: 1.5;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  font-family: "Knockout";
  font-size: 1rem;

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
  font-size: 0.35714rem;

  @media (max-width: $screen-lg) and (orientation: portrait) {
    font-size: 0.2769rem;
    line-height: 1.5;
  }
}

.layer--on-bottom .layer__footnote {
  padding-top: 24px;
  font-family: "Knockout-jr";
  font-size: 0.2286rem;

  @media (max-width: $screen-lg) and (orientation: portrait) {
    width: 40%;
    padding-top: 16px;
    font-size: 0.2462rem;
  }
}

.layer--for-mascot {
  transform: none;
}

.layer--for-mascot .layer__mascot {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 25vw;

  @media (orientation: portrait) {
    width: 50%;
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
