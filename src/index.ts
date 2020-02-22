import Vue from "vue";
import VueRouter from "vue-router";

import router from "./router";

Vue.use(VueRouter);

new Vue({
  el: "#app",
  router,
  template: `<router-view></router-view>`,
  created() {
    if (sessionStorage.redirect) {
      // https://stackoverflow.com/questions/47677220/vuejs-history-mode-with-github-gitlab-pages
      const redirect = sessionStorage.redirect;
      delete sessionStorage.redirect;
      this.$router.push(redirect);
    }
  }
});
