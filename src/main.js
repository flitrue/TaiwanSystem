import Vue from 'vue'
import App from './App'
import store from './vuex/index'

import VueRouter from 'vue-router'
import VueResouse from 'vue-resource'
import jQuery from 'jquery'
import router from './configs/routers'
// import Echarts from './configs/echarts'
// import Echarts from './configs/echarts';
// Vue.directive('echarts', Echarts);




/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App }
// })
Vue.use(VueResouse);
// Vue.directive('echarts', Echarts);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
