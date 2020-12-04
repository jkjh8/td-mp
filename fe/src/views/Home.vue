<template>
  <div class="home">
    <div class="title"><h3>Media Server Status</h3></div>
    <div><b>Play List : </b>{{ currentPlaylist }}</div>
    <div><b>Play File : </b>{{ currentFile }}</div>
    <div><b>Duration : </b>{{ duration }}</div>
    <div><b>Status : </b>{{ status }}</div>
  </div>
</template>

<script>
import { actions } from '../mixins/action'

// @ is an alias to /src
export default {
  name: 'Home',
  mixins: [actions],
  data () {
    return {
      currentPlaylist: '',
      currentFile: '',
      duration: '',
      status: 'Waiting...'
    }
  },
  created () {
    this.getSetup()
    this.$socket.on('status', (data) => {
      this.status = data
    })
    this.$socket.on('reconnectstatus', (data) => {
      this.currentPlaylist = data.playlist
      this.currentFile = data.playfile
      this.duration = data.duration
      this.status = data.status
    })
    this.$socket.emit('getStatus')
  }
}
</script>

<style>
div {
  text-align: center;
}
.home {
  height: 70vh;
  vertical-align: middle;
}
.title {
  margin: 20px auto;
}
</style>
