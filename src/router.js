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
      path: '/dashboard/sensor-select', 
      name: 'sensorSelect',
      component: () => import(/* webpackChunkName: "sensor-select" */ './views/SensorSelect.vue'),
    },
    {
      path: '/dashboard/sensor-detail', 
      name: 'sensorDetail',
      component: () => import(/* webpackChunkName: "sensor-detail" */ './views/SensorDetail.vue'),
    },
    {
      path: '/dashboard/sensor-data-raw', 
      name: 'sensorDataRaw',
      component: () => import(/* webpackChunkName: "sensor-data-raw" */ './views/SensorDataRaw.vue'),
    }
  ]
})
