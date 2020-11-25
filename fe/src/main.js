import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import VuetifyDialog from 'vuetify-dialog'
import io from 'socket.io-client'
import 'vuetify-dialog/dist/vuetify-dialog.css'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false
const socket = io('http://' + window.location.hostname, { transports: ['websocket'] })
axios.defaults.baseURL = 'http://' + window.location.hostname
// axios.defaults.withCredentials = true
Vue.prototype.$socket = socket
Vue.prototype.$axios = axios

Vue.use(VuetifyDialog, {
  context: {
    vuetify
  }
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
