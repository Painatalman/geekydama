<style scoped>
@keyframes shoot {
  0% {
    opacity: 0;
    width: 120%;
  }
  100% {
    opacity: 100%;
    width: var(--width);
  }
}

.dragon-ball {
  --width: 75px;
  margin: auto;
  width: var(--width);

  fill: orange;

  animation: shoot 3s;
}
</style>
<template>
  <svg class="dragon-ball" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="50" />
    <polygon
      fill="red"
      points="45,45 50,25 55,45 75,45 60,55 65,75 50,65 35,75 40,55 25,45 45,45"
    />
  </svg>
</template>

<script>
export default {};
</script>
