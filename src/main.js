// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import axios from "axios";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

const token =
  "MjAxOS0wMi0xNQ==.dGIuaGFsbWVuQGdtYWlsLmNvbQ==.NDFlNzk5NjgxYTJiMDcyOGNmNDZkYTRlNzQ1MGU2MmM=";
axios.defaults.baseURL = "https://services.lingapps.dk";
axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

Vue.config.productionTip = false;

Vue.use(Vuetify);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
