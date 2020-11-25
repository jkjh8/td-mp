const state = () => ({
  setup: ''
})

const mutations = {
  updateSetup (state, payload) {
    state.setup = payload
  }
}

const actions = {
  updateSetup ({ commit }, payload) {
    commit('updateSetup', payload)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
