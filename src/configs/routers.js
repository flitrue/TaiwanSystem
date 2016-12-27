import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../components/Login/Login.vue'
import Logout from '../components/Logout/Logout.vue'
import Hot from '../components/HotCharacters/HotCharacters.vue'
import Taiwan from '../components/TaiwanRegional/TaiwanRegional.vue'
import Around from '../components/AroundRegional/AroundRegional.vue'
import Home from '../components/Home/Home.vue'
import Web from '../components/Web/Web.vue'



Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', name: 'Login', component: Login },
    { path: '/Web', name: 'Web', component: Web ,
    children:[
      { path: 'Home', name: 'Home', component: Home },
      { path: 'Taiwan', name: 'Taiwan', component: Taiwan },
      { path: 'Around', name: 'Around', component: Around },

    ]},
    { path: '/Hot', name: 'Hot', component: Hot },
    { path: '/Logout', name: 'Logout', component: Logout }
  ]
})


export default router
