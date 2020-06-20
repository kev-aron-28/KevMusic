import Vue from "vue";
import VueRouter from "vue-router";
import App from "@/App.vue";
import eventBus from "@/plugins/event-bus";
import routes from "@/routes";
import msToMm from "@/filters/ms-to-mm";
import blur from "@/directives/blur";
import store from "@/store";

Vue.use(blur);
Vue.use(msToMm);
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: "history"
});
Vue.use(eventBus);
new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app");
