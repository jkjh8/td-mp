<template>
  <v-container>
    <v-card>
      <v-card-title>
        <h4>ADD PLAYLIST</h4>
      </v-card-title>
      <v-card-text>
        <v-data-table
          v-model="selected"
          :headers="headers"
          :items="filelist"
          item-key="name"
          show-select
        >
          <template v-slot:item.duration="{ item }">
            {{ times(item.duration) }}
          </template>
          <template v-slot:item.size="{ item }">
            {{ bytes(item.size) }}
          </template>
          <template v-slot:item.preview="{ item }">
            <v-btn
              icon
              @click="preview(item.name)"
            >
              <v-icon
                color="green darken-4"
              >
                mdi-play
              </v-icon>
            </v-btn>
          </template>
        </v-data-table>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn
          icon
          @click="addPlaylist"
        >
          <v-icon>mdi-check-circle-outline</v-icon>
        </v-btn>
        <v-btn
          icon
          @click="$emit('dialog')"
        >
          <v-icon>mdi-close-circle-outline</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-dialog v-model="previewDialog" max-width="800px">
      <Preview :video-source="videoSource" />
    </v-dialog>
  </v-container>
</template>

<script>
import { dataFormat } from '../../mixins/format'
import { actions } from '../../mixins/action'
import Preview from '../VideoPreview'

export default {
  components: { Preview },
  mixins: [actions, dataFormat],
  data () {
    return {
      previewDialog: false,
      videoSource: '',
      selected: [],
      headers: [
        { text: 'Name', value: 'name' },
        { text: 'Type', value: 'type' },
        { text: 'Length', value: 'duration' },
        { text: 'Size', value: 'size' },
        { text: 'Preview', value: 'preview' }
      ]
    }
  },
  created () {
    this.getFilelist()
  },
  methods: {
    resetSelected () {
      this.selected = []
    },
    async delete () {
      const files = this.selected
      if (files.length === 0) { return }
      const { data } = await this.$axios.post('/api/filelist/del', files)
      this.$store.dispatch('filelist/updateFilelist', data)
      this.resetSelected()
    },
    preview (file) {
      this.previewDialog = true
      this.videoSource = {
        width: 800,
        autoplay: true,
        sources: [{
          type: 'video/mp4',
          src: `http://${window.location.hostname}/api/filelist/preview/${file}`
        }]

      }
    },
    addPlaylist () {
      this.$axios.post('/api/addPlaylist', { id: this.playlistId, file: this.selected }).then((res) => {
        this.$store.dispatch('playlist/updatePlaylist', res.data)
      })
      this.$emit('dialog')
      this.selected = []
    }
  }
}
</script>
