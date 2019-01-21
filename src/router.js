import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
  
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
      path: '/sensor-select',
      name: 'SensorSelect',
      component: () => import(/* webpackChunkName: "sensorSelect" */ './views/SensorSelect.vue')
    }
  ]
})
