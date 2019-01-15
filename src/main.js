import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ds from './datasharing-plugin.js'
import 'normalize.css'

let dsObservables = []

Vue.config.productionTip = false

Vue.use(ds, {
  list: dsObservables
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
