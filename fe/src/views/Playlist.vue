<template>
  <v-container>
    <v-card>
      <v-card-title>
        <Header @dialog="updateDialog=!updateDialog"/>
      </v-card-title>
      <v-divider />
      <v-card-text>
        <Table />
        <v-dialog
          max-width="800px"
          style="background-color: white;"
          v-model="updateDialog"
        >
          <FilelistTable
            class="pa-0 ma-0"
            @dialog="updateDialog=!updateDialog"
          />
        </v-dialog>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { actions } from '../mixins/action'
import Header from '../components/playlists/playlistHeader'
import Table from '../components/playlists/playlistTable'
import FilelistTable from '../components/playlists/filelistTable'

export default {
  mixins: [actions],
  components: { Header, Table, FilelistTable },
  data () {
    return {
      updateDialog: false
    }
  },
  created () {
    this.getPlaylist(this.playlistId)
  }
}
</script>
