<template>
  <main>
    <div class="layer layer--on-top">
      <header class="layer__content">Dragon Fest</header>
    </div>
    <div class="layer layer--on-bottom">
      <div class="layer__content">
        <div class="layer__text">
          O primeiro evento <br />
          de Dragon ball <br />
          no Algarve
        </div>
        <footer class="layer__footnote">Mais informações brevemente</footer>
      </div>
    </div>
    <div class="layer layer--for-mascot">
      <div class="layer__content">
        <img
          src="/img_dragon-fest_goku_desktop.png"
          alt="SSJ Son Goku"
          class="layer__content"
        />
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  --container: var(--container-breakpont-min-lg);
  --mascot-width-lg: 45%;
  --mascot-width-md: 36%;
  --mascot-width: var(--mascot-width-lg);
  /* 140px in 1920x1080 screens */
  --font-size-base: 7.29169vw;
}

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
  display: flex;
  flex-direction: column;
  height: 100%;

  overflow: hidden;
  font-size: var(--font-size-base);
}

.layer {
  text-transform: uppercase;
  transform: skew(0, -18deg);
}

.layer__content {
  position: relative;

  margin: auto;
  max-width: 65vw;
  width: 100%;
}

.layer__text {
  width: 60%;
}

.layer--on-top {
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  font-family: "Knockout";
  font-size: 1em;
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

.layer--on-bottom .layer__footnote {
  padding-top: 24px;
  font-family: "Knockout-jr";
  font-size: 0.2286em;
}

.layer--for-mascot {
  transform: none;
}

.layer--for-mascot .layer__content img {
  position: absolute;
  bottom: 0;
  right: 0;
  width: var(--mascot-width);
}

@media screen and (min-width: 1200px) {
}
</style>

<script lang="ts">
require("~/fonts/Knockout-HTF29-JuniorLiteweight.otf");
require("~/fonts/Knockout-HTF69-FullLiteweight.otf");
require("~/fonts/Knockout-HTF72-FullCruiserwt.otf");
require("~/images/img_dragon-fest_goku_desktop.png");

export default {};
</script>
