<style>
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  95% {
    opacity: 0;
  }
  100% {
    opacity: 100%;
  }
}

.page-splash {
  position: relative;
  height: 100%;
  min-height: 100%;

  background: #001122;
  color: white;

  &__content {
    position: absolute;
    top: 50%;
    left: 50%;

    text-align: center;

    transform: translateY(-50%) translateX(-50%);
  }

  &__content-message {
    text-transform: uppercase;

    animation: fade-in 3s;
  }
}

.full-background {
  height: 100%;
  width: 100%;
}

.animation-delayed {
  animation: fade-in 20s ease-out;
}
</style>
<script>
import Ball from "~/components/Ball";
import MrPopo from "~/components/MrPopo";

export default {
  components: {
    "mr-popo": MrPopo,
    ball: Ball
  }
};
</script>
<template>
  <div class="page-splash">
    <div class="page-splash__content">
      <ball />
      <div class="page-splash__content-message">
        Coming Soon
      </div>
    </div>
    <div class="animation-delayed">
      <mr-popo />
    </div>
  </div>
</template>
