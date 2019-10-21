import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;
Vue.component("Hello", require("./components/HelloWorld/HelloWorld.vue").default);

new Vue({
  render: h => h(App),
}).$mount("#app");
