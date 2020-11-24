import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    component: () => import('../views/users/Login.vue')
  },
  {
    path: '/register',
    component: () => import('../views/users/Register.vue')
  },
  {
    path: '/myAccount',
    component: () => import('../views/users/My-account.vue')
  },
  {
    path: '/playlist',
    component: () => import('../views/Playlist.vue')
  },
  {
    path: '/filelist',
    component: () => import('../views/Filelist.vue')
  },
  {
    path: '/player',
    component: () => import('../views/Player.vue')
  },
  {
    path: '/ipaddr',
    component: () => import('../views/Ipaddr.vue')
  },
  {
    path: '*',
    component: () => import('../components/404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
