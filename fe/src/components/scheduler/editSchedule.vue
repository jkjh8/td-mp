<template>
  <v-card
    color="grey lighten-4"
    flat
  >
    <v-toolbar
      :color="selectedEvent.color"
      dark
    >
      <v-icon>mdi-calendar</v-icon>
      <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        icon
        @click="deleteSchedule(selectedEvent._id)"
      >
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </v-toolbar>
    <v-card-text>
      <v-text-field
        v-model="name"
        label="스케줄 이름"
        prepend-icon="mdi-account"
      />
      <v-select
        v-model="mode"
        prepend-icon="mdi-calendar-outline"
        label="구분"
        :items="items"
      />
      <DatePicker label="시작 날짜" :recvDate="startDate" @click="val => startDate = val" />
      <DatePicker v-if="mode === '매일'" :recvDate="endDate" label="종료 날짜" @click="val => endDate = val" />
      <TimePicker label="시작 시간" :recvTime="time" @click="val => time = val" />
      <v-select
        label="이벤트 모드"
        v-model="eventMode"
        prepend-icon="mdi-calendar-edit"
        :items="eventItems"
      />
      <v-select
        v-if="eventMode === '플레이리스트'"
        v-model="playlist"
        item-text="label"
        item-value="id"
        prepend-icon="mdi-library"
        label="플레이리스트"
        :items="playlistItem"
      />
      <v-text-field
        v-if="eventMode === '파일'"
        v-model="fileName"
        label="재생 파일"
        prepend-icon="mdi-clock-outline"
        readonly
        @click="fileNameModal=!fileNameModal"
      />
      <v-dialog
        v-model="fileNameModal"
        persistent
      >
        <FilelistTable
          v-if="fileNameModal"
          @dialog="fileNameModal = false"
          :singleSelect="singleSelect"
          @click="updateFileName"
        >
        </FilelistTable>
      </v-dialog>
    </v-card-text>
    <v-card-actions>
      <v-btn
        text
        color="secondary"
        @click="updateSchedule"
      >
        OK
      </v-btn>
      <v-btn
        text
        color="secondary"
        @click="$emit('close')"
      >
        Cancel
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { scheduleMixins } from '../../mixins/schedule'
import FilelistTable from '../playlists/filelistTable'
import DatePicker from './datePicker'
import TimePicker from './timePicker'

export default {
  mixins: [scheduleMixins],
  components: { FilelistTable, DatePicker, TimePicker },
  props: [
    'selectedOpen',
    'selectedEvent'
  ],
  watch: {
    selectedEvent (value) {
      this.playlist = value.playlist
      this.name = value.name
      this.mode = value.mode
      this.eventMode = value.event
      this.time = this.getTime(value.start)
      this.timed = value.timed
      this.fileName = value.file
      this.startDate = this.getDate(value.start)
      this.endDate = this.getDate(value.end)
      console.log(this.selectedEvent)
    }
  },
  data () {
    return {
      fileNameModal: false,
      playlist: this.selectedEvent.playlist,
      name: this.selectedEvent.name,
      mode: this.selectedEvent.mode,
      eventMode: this.selectedEvent.event,
      time: this.getTime(this.selectedEvent.start),
      timed: this.selectedEvent.timed,
      fileName: this.selectedEvent.file,
      startDate: this.getDate(this.selectedEvent.start),
      endDate: this.getDate(this.selectedEvent.end),
      singleSelect: true
    }
  },
  methods: {
    async deleteSchedule (id) {
      const res = await this.$dialog.confirm({
        text: '정말 삭제 하시겠습니까?',
        title: 'Warning'
      })
      if (res) {
        const result = await this.$axios.post('/api/delSchedule', { _id: id })
        this.$store.dispatch('schedule/updateSchedule', result.data)
        this.selectedOpen = false
      }
    },
    async updateSchedule () {
      console.log(this.getDate(this.startDate))
      this.$emit('close')
      const start = new Date(this.startDate + 'T' + this.time + ':00+09:00').getTime()
      const end = new Date(this.endDate + 'T' + this.time + ':05+09:00').getTime()
      let color = ''
      switch (this.eventMode) {
        case '플레이리스트':
          color = 'green'
          break
        case '파일':
          color = 'deep-purple'
          break
        case 'Stop':
          color = 'red'
      }
      const upload = {
        _id: this.selectedEvent._id,
        name: this.name,
        start: start,
        end: end,
        color: color,
        mode: this.mode,
        event: this.eventMode,
        playlist: this.playlist,
        file: this.fileName,
        timed: this.timed
      }
      const result = await this.$axios.put('/api/editSchedule', upload)
      console.log(result)
      this.$store.dispatch('schedule/updateSchedule', result.data)
    }
  }
}
</script>
