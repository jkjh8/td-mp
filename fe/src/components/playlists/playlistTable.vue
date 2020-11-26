<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-center">
            Index
          </th>
          <th>
            Name
          </th>
          <th>
            Length
          </th>
          <th class="text-center">
            Actions
          </th>
        </tr>
      </thead>
      <tr v-for="(item, i) in playlist" :key="i">
        <td class="text-center">
          {{ item.playid + 1 }}
        </td>
        <td class="text-left">{{ item.name }}</td>
        <td>{{ times(item.duration) }}</td>
        <td class="text-center">
          <v-btn
            icon
            @click="changeList(i, i - 1)"
          >
            <v-icon>mdi-chevron-up</v-icon>
          </v-btn>
          <v-btn
            icon
            @click="changeList(i, i + 1)"
          >
            <v-icon>mdi-chevron-down</v-icon>
          </v-btn>
          <v-btn
            icon
            @click="playid(i)"
          >
            <v-icon>mdi-play</v-icon>
          </v-btn>
          <v-btn
            color="red darken-4"
            icon
            @click="deleteList(i)"
          >
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </td>
      </tr>
    </template>
  </v-simple-table>
</template>

<script>
import { actions } from '../../mixins/action'
import { dataFormat } from '../../mixins/format'

export default {
  mixins: [actions, dataFormat],
  methods: {
    async changeList (fromIndex, toIndex) {
      const minIndex = 0
      const maxIndex = this.playlist.length - 1
      if (maxIndex < toIndex) { toIndex = minIndex }
      if (toIndex < minIndex) { toIndex = maxIndex }
      await this.playlist.splice(toIndex, 0, this.playlist.splice(fromIndex, 1)[0])
      const rtPlaylist = []
      await this.playlist.forEach((file, index) => {
        file.playid = index
        rtPlaylist.push(file)
      })
      this.setPlaylist(this.playlistId, rtPlaylist)
    },
    async deleteList (index) {
      this.playlist.splice(index, 1)
      await this.playlist.forEach((file, id) => {
        this.playlist[id].playid = id
      })
      this.setPlaylist(this.playlistId, this.playlist)
    },
    playid (id) {
      this.$axios.get('/api/playid/' + this.playlistId + '/' + id)
    }
  }
}
</script>
