import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ds from './library/datasharing-plugin.js'

let dsObservables = []
Vue.prototype.$hostname = 'http://iotstadslab.herokuapp.com'
Vue.config.productionTip = false

Vue.use(ds, {
  list: dsObservables
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
