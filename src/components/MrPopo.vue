import Vue from "vue";
<style lang="postcss" scoped>
.mr-popo-container {
  --color-default: #000000;
  --color-alt: blue;
  --color: var(--color-default);

  background: var(--color);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mr-popo {
  background: var(--color);
  width: 50px;

  &--blue {
    background: var(--color-alt);
  }
}

.mr-popo--as-background {
  width: 30%;
}

.mr-popo__message {
  text-align: center;
  font-size: 16px;
  font-family: sans-serif;
  text-transform: uppercase;
}

.black {
  background: black;
}
.centered {
  text-align: center;
}

@keyframes open {
  from {
    transform: rotateX(90deg);
  }

  to {
    transform: rotateX(0deg);
  }
}

@keyframes instant-visibility {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.mr-popo--is-animated {
  .mr-popo__eye {
    animation: open 300ms ease-out 400ms;
    animation-fill-mode: backwards;
  }

  .mr-popo__eye--left {
    transform-origin: 30px 35px;
  }

  .mr-popo__eye--right {
    transform-origin: 70px 35px;
  }

  .mr-popo__mouth {
    animation: open 150ms ease-out 900ms;
    animation-fill-mode: backwards;
    transform-origin: 50px 70px;
  }

  .mr-popo__message {
    animation: instant-visibility 10ms ease-out 1200ms;
    animation-fill-mode: backwards;
  }
}
</style>
<script type="ts">
// Define a new component called todo-item
export default {
};
</script>
<template>
  <div class="mr-popo-container mr-popo-container--large">
    <svg
      class="mr-popo mr-popo--as-background mr-popo--is-animated"
      viewBox="0 10 100 110"
      version="1.1"
    >
      <circle
        cx="30"
        cy="35"
        r="10"
        fill="transparent"
        stroke="white"
        stroke-width="5"
        class="mr-popo__eye mr-popo__eye--left"
      />
      <circle
        cx="70"
        cy="35"
        r="10"
        fill="transparent"
        stroke="white"
        stroke-width="5"
        class="mr-popo__eye mr-popo__eye--right"
      />
      <ellipse
        cx="50"
        cy="70"
        rx="30"
        ry="8"
        fill="#fe8f79"
        stroke="red"
        stroke-width="6"
        class="mr-popo__mouth"
      />
      <text
        x="50%"
        y="110"
        fill="white"
        dominant-baseline="middle"
        text-anchor="middle"
        class="mr-popo__message"
      >
        I'll say!
      </text>
    </svg>
  </div>
</template>
