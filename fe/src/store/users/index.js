const state = () => ({
  user: ''
})

const mutations = {
  updateUser (state, payload) {
    state.user = payload
  }
}

const actions = {
  updateUser ({ commit }, payload) {
    commit('updateUser', payload)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
