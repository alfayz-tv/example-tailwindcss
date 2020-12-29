import Vue from 'vue'
import App from './App.vue'
import './index.css'
import VueRouter from 'vue-router'
import { myRoutes } from './routes.js'

Vue.use(VueRouter)
let router = new VueRouter({
  mode: 'history',
  linkExactActiveClass: 'is-active',
  routes: myRoutes
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
