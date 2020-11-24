const state = () => ({
  playlist: [],
  playlistId: 0
})

const mutations = {
  updatePlaylist (state, payload) {
    state.playlist = payload
  },
  updatePlaylistId (state, payload) {
    state.playlistId = payload
  }
}

const actions = {
  updatePlaylist ({ commit }, payload) {
    commit('updatePlaylist', payload)
  },
  updatePlaylistId ({ commit }, payload) {
    commit('updatePlaylistId', payload)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
