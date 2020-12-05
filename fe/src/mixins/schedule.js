import moment from 'moment'
import { mapState } from 'vuex'

export const scheduleMixins = {
  data () {
    return {
      name: '',
      mode: '',
      eventMode: '',
      playlist: '',
      time: null,
      timed: false,
      fileName: '',
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
  computed: {
    ...mapState({
      schedule: state => state.schedule.schedule
    })
  },
  methods: {
    getTime (time) {
      if (time !== undefined) return moment(time).format('HH:mm')
    },
    getDate (timeStemp) {
      return new Date(timeStemp).toISOString().substr(0, 10)
    },
    updateFileName (payload) {
      console.log(payload)
      this.fileName = payload[0].name
      this.fileNameModal = false
    },
    async updateRange ({ start, end }) {
      // const events = this.schedule
      // const min = new Date(`${start.date}T00:00:00`)
      // const max = new Date(`${end.date}T23:59:59`)
      // const days = (max.getTime() - min.getTime()) / 86400000
      // const eventCount = this.rnd(days, days + 2)

      // for (let i = 0; i < eventCount; i++) {
      //   const allDay = this.rnd(0, 3) === 0
      //   const firstTimestamp = this.rnd(min.getTime(), max.getTime())
      //   const first = new Date(firstTimestamp - (firstTimestamp % 900000))
      //   const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000
      //   const second = new Date(first.getTime() + secondTimestamp)

      //   events.push({
      //     name: this.names[this.rnd(0, this.names.length - 1)],
      //     start: first,
      //     end: second,
      //     color: this.colors[this.rnd(0, this.colors.length - 1)],
      //     timed: !allDay
      //   })
      // }
      const { data } = await this.$axios.get('/api/getSchedule')
      await this.$store.dispatch('schedule/updateSchedule', data)
    },
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
    reset () {
      this.name = ''
      this.mode = ''
      this.time = null
      this.eventMode = ''
      this.startDate = new Date().toISOString().substr(0, 10)
      this.endDate = new Date().toISOString().substr(0, 10)
    }
  }
}
