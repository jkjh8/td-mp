import Vue from 'vue'
import Vuex from 'vuex'
import users from './users'
import playlist from './playlist'
import filelist from './filelist'
import setup from './setup'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    users,
    playlist,
    filelist,
    setup
  }
})
