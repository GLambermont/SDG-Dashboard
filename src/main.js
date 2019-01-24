import 'normalize.css';
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ds from './library/datasharing-plugin.js'

let dsObservables = [];

Vue.config.productionTip = false;
Vue.prototype.$hostname = 'http://192.168.1.111:3000';

Vue.use(ds, {
  list: dsObservables
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
