import Vue from 'vue'
import VueRouter from "vue-router";
import App from './App.vue'

import AppPosts from "./components/AppPosts";

Vue.use(VueRouter);

const routes = [
  {    name: "posts", path: "/posts", component: AppPosts }
];

const router = new VueRouter({
  routes
  
});





Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
