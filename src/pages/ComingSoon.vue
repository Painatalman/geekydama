<style lang="postcss" scoped>
$screen-lg: 1025px;
$screen-xl: 1440px;

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

main {
  --font-size-base: 140px;
  --text-width: 60%;
  -webkit-font-smoothing: antialiased;
  --content-wrapper-max-width: $screen-lg;

  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;

  font-size: var(--font-size-base);

  @media (max-width: $screen-lg) and (orientation: landscape) {
    --font-size-base: 12vw;
    --content-wrapper-max-width: 85vw;
  }

  @media (min-width: $screen-xl) {
    --font-size-base: 180px;
    --content-wrapper-max-width: $screen-xl;
  }
}

.layer {
  text-transform: uppercase;
  transform: skew(0, -15deg);
}

.layer__content {
  position: relative;

  margin: auto;
  max-width: var(--content-wrapper-max-width);
  width: 100%;
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
}

.layer--on-top .layer__content {
  margin-bottom: 0;
}

.layer--on-bottom {
  font-family: "Knockout-cr";
  color: white;
  background: black;
  flex: 3;
  padding: 12px 0;
}

.layer--on-bottom .layer__text {
  font-size: 0.35714em;
}

.layer__footnote {
  padding-top: 24px;
  font-family: "Knockout-jr";
  font-size: 0.2286em;
}

.layer--for-mascot {
  transform: none;
  position: relative;
}

.layer__mascot {
  position: absolute;
  right: 0;
  bottom: 0;

  width: auto;
  height: 90vh;
}

@media (max-width: $screen-lg) and (orientation: portrait) {
  $content-padding-v: 20px;

  main {
    --text-width: 48%;
    --font-size-base: 65px;
  }

  .layer__content {
    position: static;

    padding: 0 $content-padding-v;
  }

  .layer__footnote {
    width: var(--text-width);
    padding-top: 24px;
    /* SHAME: not sure why, but I think it matched 18px; */
    font-size: 0.2462em;
  }

  .layer__mascot {
    max-width: none;
    height: auto;
    width: calc(100% - var(--text-width) + $content-padding-v);
  }

  .layer__text br {
    display: none;
  }

  .layer--on-top {
    flex: 1.2;
  }

  .layer--on-top .layer__content {
    padding-bottom: 18px;
  }

  .layer--on-bottom {
    flex: 2;
  }

  .layer--on-bottom .layer__text {
    font-size: 0.2769em;
    line-height: 1.5;
  }

  .layer--for-mascot {
    flex: 1;
  }
}
</style>

<script lang="ts">
import MrPopo from "~/components/MrPopo.vue";
import setKCode from "../utils/setKCode";
import Vue from "vue";

require("~/fonts/Knockout-HTF29-JuniorLiteweight.otf");
require("~/fonts/Knockout-HTF69-FullLiteweight.otf");
require("~/fonts/Knockout-HTF72-FullCruiserwt.otf");
require("~/images/img_dragon-fest_goku_desktop.png");
require("~/images/img_dragon-fest_goku_mobile.png");

export default Vue.extend({
  components: {
    "mr-popo": MrPopo
  },
  data() {
    return {
      showPopo: false
    };
  },
  mounted() {
    this.$nextTick(function() {
      setKCode(() => {
        this.showPopo = true;
      });
    });
  }
});
</script>

<template>
  <mr-popo v-if="showPopo" />
  <main v-else>
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
