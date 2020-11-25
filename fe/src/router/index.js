import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

const requireAuth = () => (to, from, next) => {
  if (store.state.users.user) {
    return next()
  }
  next('/login')
}

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
    component: () => import('../views/users/My-account.vue'),
    beforeEnter: requireAuth()
  },
  {
    path: '/playlist',
    component: () => import('../views/Playlist.vue'),
    beforeEnter: requireAuth()
  },
  {
    path: '/filelist',
    component: () => import('../views/Filelist.vue'),
    beforeEnter: requireAuth()
  },
  {
    path: '/player',
    component: () => import('../views/Player.vue')
  },
  {
    path: '/ipaddr',
    component: () => import('../views/Ipaddr.vue'),
    beforeEnter: requireAuth()
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
