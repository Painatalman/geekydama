import VueRouter, { RouteConfig } from "vue-router";

import ComingSoon from "./pages/ComingSoon.vue";
import Splash from "./pages/Splash.vue";

const routes: RouteConfig[] = [
  {
    path: "/coming-soon",
    name: "Coming Soon",
    component: ComingSoon
  },
  {
    path: "/",
    name: "Demo",
    component: Splash
  }
];

export default new VueRouter({
  mode: "history",
  routes
});
