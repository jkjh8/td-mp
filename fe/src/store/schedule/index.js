const state = () => ({
  schedule: []
})

const mutations = {
  updateSchedule (state, payload) {
    state.schedule = payload
  },
  addSchedule (state, payload) {
    state.schedule.push(payload)
  }
}

const actions = {
  updateSchedule ({ commit }, payload) {
    commit('updateSchedule', payload)
  },
  addSchedule ({ commit }, payload) {
    commit('addSchedule', payload)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
