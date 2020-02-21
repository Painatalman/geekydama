import Vue from "vue";

import ComingSoon from "./components/pages/ComingSoon.vue";

new Vue({
  el: "#app",
  template: `
    <coming-soon></coming-soon>
  `,
  components: {
    ComingSoon
  }
});
