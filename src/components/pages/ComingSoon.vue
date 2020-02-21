<template>
  <main>
    <div class="layer layer--on-top">
      <header class="layer__content">Dragon Fest</header>
    </div>
    <div class="layer layer--in-middle">
      <p class="layer__content">O primeiro evento de Dragon ball no Algarve</p>
    </div>
    <div class="layer layer--on-bottom">
      <footer class="layer__content">
        Mais informações brevemente
      </footer>
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
}

.layer {
  text-transform: uppercase;
  transform: skew(0, -14deg);
}

.layer__content {
  position: relative;

  margin: auto;
  max-width: 720px;
  width: 100%;
}

.layer--on-top {
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  font-family: "Knockout";
  font-size: 140px;
}

.layer--on-top .layer__content {
  margin-bottom: 0;
}

.layer--in-middle {
  font-family: "Knockout-cr";
  font-size: 50px;
  color: white;
  background: black;
}

.layer--on-bottom {
  font-family: "Knockout-jr";
  font-size: 32px;
  flex: 1;
}

.layer--for-mascot {
  transform: none;
}

.layer--for-mascot .layer__content img {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 40%;
}
</style>

<script lang="ts">
require("../../fonts/Knockout-HTF29-JuniorLiteweight.otf");
require("../../fonts/Knockout-HTF69-FullLiteweight.otf");
require("../../fonts/Knockout-HTF72-FullCruiserwt.otf");
require("../../images/img_dragon-fest_goku_desktop.png");

export default {};
</script>
