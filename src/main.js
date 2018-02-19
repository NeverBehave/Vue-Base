// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'mdui/dist/css/mdui.min.css'
import 'mdui/dist/js/mdui.min.js'
import mdui from 'mdui'
import api from './api.js'

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
Vue.prototype.$mdui = mdui
Vue.prototype.$api = api

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
