import Vue from 'vue'
import App from './App'
import jQuery from 'jquery'
import router from './configs/routers'


/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App }
// })

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  render: h => h(App)
}).$mount('#app')
