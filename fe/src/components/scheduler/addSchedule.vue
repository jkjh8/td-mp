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
        <v-dialog
          ref="startDateDialog"
          v-model="dateModalStart"
          :return-value.sync="startDate"
          persistent
          width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="startDate"
              label="시작 날짜"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="startDate"
            scrollable
            locale="ko"
          >
            <v-spacer></v-spacer>
            <v-btn
              text
              color="primary"
              @click="dateModalStart = false"
            >
              Cancel
            </v-btn>
            <v-btn
              text
              color="primary"
              @click="$refs.startDateDialog.save(startDate)"
            >
              OK
            </v-btn>
          </v-date-picker>
        </v-dialog>
        <v-dialog
          v-if="mode === '매일'"
          ref="endDateDialog"
          v-model="dateModalEnd"
          :return-value.sync="endDate"
          persistent
          width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="endDate"
              label="종료 날짜"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="endDate"
            scrollable
            locale="ko"
          >
            <v-spacer></v-spacer>
            <v-btn
              text
              color="primary"
              @click="dateModalEnd = false"
            >
              Cancel
            </v-btn>
            <v-btn
              text
              color="primary"
              @click="$refs.endDateDialog.save(endDate)"
            >
              OK
            </v-btn>
          </v-date-picker>
        </v-dialog>
        <v-dialog
          ref="startTimeDialog"
          v-model="timeModal"
          :return-value.sync="time"
          persistent
          width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="time"
              label="시작 시간"
              prepend-icon="mdi-clock-outline"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-time-picker
            v-if="timeModal"
            v-model="time"
            full-width
          >
            <v-spacer></v-spacer>
            <v-btn
              text
              color="primary"
              @click="timeModal = false"
            >
              Cancel
            </v-btn>
            <v-btn
              text
              color="primary"
              @click="$refs.startTimeDialog.save(time)"
            >
              OK
            </v-btn>
          </v-time-picker>
        </v-dialog>
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

export default {
  props: ['addScheduleModal'],
  components: { FilelistTable },
  watch: {
    fileName (value) {
      console.log(value)
    }
  },
  data () {
    return {
      name: '',
      mode: '',
      eventMode: '',
      timeModal: false,
      playlist: '',
      time: null,
      fileName: '',
      fileNameModal: false,
      singleSelect: true,
      dateModalStart: false,
      dateModalEnd: false,
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
  methods: {
    add () {
      this.$emit('close')
      const timestemp = (this.startDate + 'T' + this.time + ':00+09:00')
      console.log(new Date(timestemp).getTime())
    },
    updateFileName (payload) {
      this.fileName = payload[0].name
      this.fileNameModal = false
    }
  }
}
</script>
