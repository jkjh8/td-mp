<template>
  <v-container>
    <h1>Scheduler</h1>
    <v-card height="100%" class="flaxcard">
      <v-card-title height="30">
        <v-toolbar
          flat
        >
          <v-btn
            outlined
            class="mr-4"
            color="grey darken-2"
            @click="setToday"
          >
            Today
          </v-btn>
          <v-btn
            fab
            text
            small
            color="grey darken-2"
            @click="prev"
          >
            <v-icon small>
              mdi-chevron-left
            </v-icon>
          </v-btn>
          <v-btn
            fab
            text
            small
            color="grey darken-2"
            @click="next"
          >
            <v-icon small>
              mdi-chevron-right
            </v-icon>
          </v-btn>
          <v-toolbar-title v-if="$refs.calendar">
            {{ $refs.calendar.title }}
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-menu
            bottom
            right
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                outlined
                color="grey darken-2"
                v-bind="attrs"
                v-on="on"
              >
                <span>{{ typeToLabel[type] }}</span>
                <v-icon right>
                  mdi-menu-down
                </v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item @click="type = 'day'">
                <v-list-item-title>Day</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = 'week'">
                <v-list-item-title>Week</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = 'month'">
                <v-list-item-title>Month</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = '4day'">
                <v-list-item-title>4 days</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-toolbar>
        <v-btn
          icon
          @click="addScheduleModal=!addScheduleModal"
        >
          <v-icon>mdi-plus-circle-outline</v-icon>
        </v-btn>
      </v-card-title>
      <v-divider />
      <v-card-text>
        <v-sheet height="100%">
          <v-calendar
            ref="calendar"
            v-model="focus"
            color="primary"
            :events="schedule"
            :event-color="getEventColor"
            :type="type"
            @click:event="showEvent"
            @click:more="viewDay"
            @click:date="viewDay"
            @change="updateRange"
          ></v-calendar>
          <v-menu
            v-model="selectedOpen"
            :close-on-content-click="false"
            :activator="selectedElement"
            offset-x
            max-width="400px"
          >
            <EditSchedule
              :selectedOpen='selectedOpen'
              :selectedEvent='selectedEvent'
              @close="selectedOpen = false"
            />
          </v-menu>
        </v-sheet>
        <AddSchedule
          :addScheduleModal="addScheduleModal"
          :name="name"
          :mode="mode"
          :eventMode="eventMode"
          :playlist="playlist"
          :time="time"
          :timed="timed"
          :fileName="fileName"
          :startDate="startDate"
          :endDate="endDate"
          :items="items"
          :eventItems="eventItems"
          :playlistItem="playlistItem"
          @close="addScheduleModal=!addScheduleModal"
        />
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { scheduleMixins } from '../mixins/schedule'
import EditSchedule from '../components/scheduler/editSchedule'
import AddSchedule from '../components/scheduler/addSchedule'

export default {
  components: { AddSchedule, EditSchedule },
  mixins: [scheduleMixins],
  data: () => ({
    addScheduleModal: false,
    focus: '',
    type: 'month',
    typeToLabel: {
      month: 'Month',
      week: 'Week',
      day: 'Day',
      '4day': '4 Days'
    },
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false
  }),
  mounted () {
    // const { data } = await this.$axios.get('/api/getSchedule')
    // this.$store.dispatch('schedule/updateSchedule', data)
    // this.$refs.calendar.checkChange()
  },
  methods: {
    viewDay ({ date }) {
      this.focus = date
      this.type = 'day'
    },
    setToday () {
      this.focus = ''
    },
    getEventColor (event) {
      return event.color
    },
    prev () {
      this.$refs.calendar.prev()
    },
    next () {
      this.$refs.calendar.next()
    },
    showEvent ({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event
        this.selectedElement = nativeEvent.target
        setTimeout(() => {
          this.selectedOpen = true
        }, 10)
      }

      if (this.selectedOpen) {
        this.selectedOpen = false
        setTimeout(open, 10)
      } else {
        open()
      }
      nativeEvent.stopPropagation()
    }
  }
}
</script>

<style>
.flexcard {
  display: flex;
  flex-direction: column;
}
</style>
