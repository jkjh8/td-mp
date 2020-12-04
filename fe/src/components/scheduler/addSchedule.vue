<template>
  <v-dialog
    max-width="400px"
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
import { scheduleMixins } from '../../mixins/schedule'
import FilelistTable from '../playlists/filelistTable'
import DatePicker from './datePicker'
import TimePicker from './timePicker'

export default {
  mixins: [scheduleMixins],
  components: { FilelistTable, DatePicker, TimePicker },
  props: ['addScheduleModal'],
  data () {
    return {
      alertType: 'error',
      errmsg: false,
      alertMessage: '',
      fileNameModal: false,
      singleSelect: true
    }
  },
  watch: {
    errmsg (val) {
      if (!val) { return }
      setTimeout(() => (this.errmsg = false), 2000)
    }
  },
  methods: {
    async add () {
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
      if (this.mode === '매일') {
        this.timed = false
      } else {
        this.timed = true
      }
      this.$emit('close')
      const start = new Date(this.startDate + 'T' + this.time + ':00+09:00').getTime()
      const end = (this.endDate + 'T' + this.time + ':05+09:00')
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
        name: this.name,
        start: start,
        end: new Date(end).getTime(),
        color: color,
        mode: this.mode,
        event: this.eventMode,
        playlist: this.playlist,
        file: this.fileName,
        timed: this.timed
      }
      const result = await this.$axios.post('/api/addSchedule', upload)
      console.log(result)
      this.$store.dispatch('schedule/updateSchedule', result.data)
      this.reset()
    }
  }
}
</script>
