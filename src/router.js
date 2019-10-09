import Vue from 'vue'
import Router from 'vue-router'
import xin from './views/xin/index.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Xin',
      component: xin
    }
  ]
})
