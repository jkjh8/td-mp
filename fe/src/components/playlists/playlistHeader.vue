<template>
  <v-row
    dense
  >
    <v-col
      cols="7"
    >
      <h4>PLAY LIST : {{ items[playlistId].label }}</h4>
    </v-col>
    <v-col
      cols="3"
      class="pa-0 ma-0"
    >
      <v-select
        v-model="selected"
        :items="items"
        item-text="label"
        item-value="id"
        outlined
        hide-details
        dense
        @change="setPlaylistId(`${selected}`)"
      />
    </v-col>
    <v-col
      cols="2"
      class="text-right pa-0 ma-0"
    >
      <v-btn
        icon
        color="green darken-4"
        @click="playli"
      >
        <v-icon>mdi-play</v-icon>
      </v-btn>
      <v-btn
        icon
        color="red darken-4"
        @click="stop"
      >
        <v-icon>mdi-stop</v-icon>
      </v-btn>
      <v-btn
        icon
        @click="$emit('dialog')"
      >
        <v-icon>mdi-plus-circle-outline</v-icon>
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
import { actions } from '../../mixins/action'

export default {
  mixins: [actions],
  created () {
    this.selected = this.playlistId
  },
  data () {
    return {
      items: [
        { label: 'Playlist 1', id: 0 },
        { label: 'Playlist 2', id: 1 },
        { label: 'Playlist 3', id: 2 },
        { label: 'Playlist 4', id: 3 },
        { label: 'Playlist 5', id: 4 },
        { label: 'Playlist 6', id: 5 },
        { label: 'Playlist 7', id: 6 },
        { label: 'Playlist 8', id: 7 }
      ],
      selected: this.playlistId
    }
  },
  methods: {
    playli () {
      this.$axios.get('/api/playli/' + this.playlistId).then((res) => {
        console.log(res)
      })
    },
    stop () {
      this.$axios.get('/api/stop').then((res) => {
        console.log(res)
      })
    }
  }
}
</script>

<style>
.right {
  text-align: right;
}
</style>
