<template>
  <v-container>
    <v-row>
      <v-spacer />
      <v-col cols="4">
        <v-text-field
          class="pt-0 mt-0"
          v-model="search"
          append-icon="mdi-magnify"
          label="search"
          single-line
          hide-details
        />
      </v-col>
  </v-row>
    <v-data-table
      v-model="selected"
      :headers="headers"
      :items="filelist"
      :search="search"
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
            color="green"
          >
            mdi-play
          </v-icon>
        </v-btn>
      </template>
    </v-data-table>
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
      search: '',
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
          src: `http://${window.location.hostname}:3000/api/filelist/preview/${file}`
        }]

      }
    }
  }
}
</script>
