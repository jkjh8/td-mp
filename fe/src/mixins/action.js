import { mapState } from 'vuex'

export const actions = {
  computed: {
    ...mapState({
      playlist: state => state.playlist.playlist,
      playlistId: state => state.playlist.playlistId,
      filelist: state => state.filelist.filelist,
      setup: state => state.setup.setup
    })
  },
  methods: {
    getPlaylist (id) {
      this.$axios.get('/api/playlist/' + id).then((res) => {
        this.$store.dispatch('playlist/updatePlaylist', res.data)
      })
    },
    setPlaylistId (id) {
      this.$store.dispatch('playlist/updatePlaylistId', id)
      this.getPlaylist(id)
    },
    setPlaylist (id, list) {
      const setParams = { id: id, list: list }
      this.$axios.post('/api/playlist', setParams).then((res) => {
        this.$store.dispatch('playlist/updatePlaylist', res.data)
      })
    },
    getFilelist () {
      this.$axios.get('/api/filelist/filelist').then((res) => {
        this.$store.dispatch('filelist/updateFilelist', res.data)
      })
    },
    filelistRefrash () {
      this.$axios.get('/api/filelist/refrash').then((res) => {
        this.$store.dispatch('filelist/updateFilelist', res.data)
      })
    },
    getSetup () {
      this.$axios.get('/api/setup').then((res) => {
        this.$store.dispatch('setup/updateSetup', res.data)
      })
    }
  }
}
