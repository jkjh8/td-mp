<template>
  <v-container>
    <v-card>
      <v-card-title class="grey lighten-4">
        <h4>PLAYER SETUP</h4>
      </v-card-title>
      <v-card-text>
        <v-list>
          <v-list-item>
            POWER ON PLAY
            <v-spacer />
            <v-switch
              v-model="setup.poweronplay"
              @click="playerSet('poweronplay')"
            />
          </v-list-item>
          <v-list-item>
            LOOP ONE
            <v-spacer />
            <v-switch
              v-model="setup.loop_one"
              @click="playerSet('loop_one')"
            />
          </v-list-item>
          <v-list-item>
            LOOP
            <v-spacer />
            <v-switch
              v-model="setup.loop"
              @click="playerSet('loop')"
            />
          </v-list-item>
          <v-list-item>
            FULL SCREEN
            <v-spacer />
            <v-switch
              v-model="setup.fullscreen"
              @click="playerSet('fullscreen')"
            />
          </v-list-item>
          <v-list-item>
            DURATION
            <v-spacer />
            <v-switch
              v-model="setup.progress"
              @click="playerSet('progress')"
            />
          </v-list-item>
          <v-list-item>
            END STOP & CLOSE
            <v-spacer />
            <v-switch
              v-model="setup.endclose"
              @click="playerSet('endclose')"
            />
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { actions } from '../mixins/action'

export default {
  mixins: [actions],
  async mounted () {
    this.getSetup()
  },
  methods: {
    playerSet (func) {
      this.$axios.post('/api/setup', { [func]: this.setup[func] })
    }
  }
}
</script>
