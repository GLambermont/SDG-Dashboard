import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Dashboard from './views/SensorSelect.vue'
import Detail from './views/SensorDetail.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/dashboard/sensor-select',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
  ]
})
