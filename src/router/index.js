import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/layouts/Index'
import NotFoundComponent from '@/layouts/errors/NotFoundComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },

    {path: '*', component: NotFoundComponent}
  ],
  mode: 'history'
})
