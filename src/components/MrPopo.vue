import Vue from "vue";
<style scoped>
:root {
  --color-default: #000000;
  --color-alt: blue;
}

.mr-popo {
  --color: var(--color-default);

  background: var(--color);
  width: 50px;
}

.mr-popo--is-blue {
  --color: var(--color-alt);
}

.mr-popo--large {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 30%;
}

.mr-popo__message {
  font-size: 24px;
  font-family: "Comic Sans";
}

.mr-popo-container--large {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

</style>
<script type="ts">
// Define a new component called todo-item
export default Vue.component("mr-popo", {
  data: {
    size: "large",
    message: "I'll say!"
  }
});

<template>
  <div class="${styles["mr-popo-container"]} ${styles["mr-popo-container--large"]}">
        <svg class="${styles["mr-popo"]} ${styles["mr-popo--large"]}" viewBox = "0 0 100 100" version = "1.1">
          <circle cx = "30" cy = "35" r = "10" fill = "transparent" stroke = "white" stroke-width = "5"/>
          <circle cx = "70" cy = "35" r = "10" fill = "transparent" stroke = "white" stroke-width = "5"/>
          <ellipse cx="50" cy="70" rx="30" ry="8" fill="#fe8f79" stroke="red" stroke-width="6"/>
          <text x="42" y="90" font-family="sans-serif" font-size="5" fill="white">
            I'll Say!
          </text>
        </svg>
      </div>
</template>
