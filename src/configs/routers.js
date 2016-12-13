import Vue from 'vue'
import VueRouter from 'vue-router'


import Login from '../components/Login/Login.vue'
import One from '../components/One.vue'
import Two from '../components/Two.vue'
import Home from '../components/Home/Home.vue'


Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', name: 'Login', component: Login },
    { path: '/One', name: 'One', component: One },
    { path: '/Two', name: 'Two', component: Two },
    { path: '/Home', name: 'Home', component: Home }
  ]
})

export default router
