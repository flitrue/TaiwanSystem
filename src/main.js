import Vue from 'vue'
import App from './App'
import VueResouse from 'vue-resource'
import jQuery from 'jquery'
import router from './configs/routers'
import Echarts from './configs/echarts';






/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App }
// })
Vue.use(VueResouse);
Vue.directive('echarts', Echarts);

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  render: h => h(App)
}).$mount('#app')
