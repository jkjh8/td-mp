<template>
  <v-dialog
    max-width="600px"
    persistent
    v-model="addScheduleModal"
  >
    <v-card
      color="grey lighten-4"
      flat
    >
      <v-toolbar
        color="primary"
        dark
      >
        <v-icon>mdi-pencil</v-icon>
        <v-toolbar-title>ADD SCHEDULE</v-toolbar-title>
      </v-toolbar>
      <v-alert :type="alertType" :value="errmsg" transition="scroll-y-transition">
        {{ alertMessage }}
      </v-alert>
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
        <DatePicker label="시작 날짜" @click="val => startDate = val" />
        <DatePicker v-if="mode === '매일'" label="종료 날짜" @click="val => endDate = val" />
        <TimePicker label="시작 시간" @click="val => time = val" />
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
          @click="add"
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
  </v-dialog>
</template>

<script>
import FilelistTable from '../playlists/filelistTable'
import DatePicker from './datePicker'
import TimePicker from './timePicker'

export default {
  props: ['addScheduleModal'],
  components: { FilelistTable, DatePicker, TimePicker },
  data () {
    return {
      alertType: 'error',
      errmsg: false,
      alertMessage: '',
      name: '',
      mode: '',
      eventMode: '',
      playlist: '',
      time: null,
      fileName: '',
      fileNameModal: false,
      singleSelect: true,
      startDate: new Date().toISOString().substr(0, 10),
      endDate: new Date().toISOString().substr(0, 10),
      items: [
        '매일',
        '한번'
      ],
      eventItems: [
        '플레이리스트',
        '파일',
        'Stop'
      ],
      playlistItem: [
        { label: 'Playlist 1', id: 0 },
        { label: 'Playlist 2', id: 1 },
        { label: 'Playlist 3', id: 2 },
        { label: 'Playlist 4', id: 3 },
        { label: 'Playlist 5', id: 4 },
        { label: 'Playlist 6', id: 5 },
        { label: 'Playlist 7', id: 6 },
        { label: 'Playlist 8', id: 7 }
      ]
    }
  },
  watch: {
    errmsg (val) {
      if (!val) { return }
      setTimeout(() => (this.errmsg = false), 2000)
    },
    startDate (val) {
      console.log(val)
    }
  },
  methods: {
    add () {
      if (this.name === '') {
        this.errmsg = true
        this.alertMessage = '스케줄 이름을 입력하세요'
        return
      }
      if (this.mode === '') {
        this.errmsg = true
        this.alertMessage = '스케줄 모드를 입력하세요'
        return
      }
      if (this.eventMode === '') {
        this.errmsg = true
        this.alertMessage = '이벤트 모드를 입력하세요'
        return
      }
      if (this.time === null) {
        this.errmsg = true
        this.alertMessage = '시작 시간을 입력하세요'
        return
      }
      this.$emit('close')
      const timestemp = (this.startDate + 'T' + this.time + ':00+09:00')
      console.log(new Date(timestemp).getTime())
      const start = new Date(this.startDate + 'T' + this.time + ':00+09:00').getTime()
      const end = (this.endDate + 'T' + this.time + ':05+09:00')
      let color = ''
      switch (this.eventMode) {
        case '플레이리스트':
          color = 'green'
          break
        case '파일':
          color = 'puple'
          break
        case 'Stop':
          color = 'red'
      }
      const upload = {
        name: this.name,
        start: start,
        end: new Date(end).getTime(),
        color: color,
        detailes: {
          mode: this.mode,
          event: this.eventMode,
          playlist: this.playlist,
          file: this.fileName
        }
      }
      console.log(upload)
    },
    updateFileName (payload) {
      this.fileName = payload[0].name
      this.fileNameModal = false
    },
    reset () {
      this.name = ''
      this.mode = ''
      this.time = null
      this.eventMode = ''
    }
  }
}
</script>
