import 'normalize.css';
import Vue from 'vue';
import moment from 'moment';
import App from './App.vue';
import router from './router';
import ds from './library/datasharing-plugin.js';
import './scss/_nprogress.scss';
import NProgress from 'nprogress';
import Axios from 'axios';
import VueLocalStorage from 'vue-localstorage';

let dsObservables = [];

Vue.config.productionTip = false;
Vue.prototype.$hostname = 'http://192.168.1.111:3000';


Vue.filter('formatDate', function (value) {
  if (value) {
    return moment(String(value)).format('DD/MM/YYYY hh:mm:ss')
  }
});

// Add a loading bar for when page gets resolved.
router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start();
  }
  next();
});

router.afterEach((to, from) => {
  NProgress.done();
});

// before a request is made start the nprogress
Axios.interceptors.request.use(config => {
  NProgress.start();
  return config;
});

// before a response is returned stop nprogress
Axios.interceptors.response.use(response => {
  NProgress.done();
  return response;
});

Vue.use(VueLocalStorage, {
  name: 'ls',
  bind: true //created computed members from your variable declarations
});

Vue.use(ds, {
  list: dsObservables
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
