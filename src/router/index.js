import Vue from "vue";
import Router from "vue-router";
import AutoComplete from "@/components/AutoComplete";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "AutoComplete",
      component: AutoComplete
    }
  ]
});
