<template>
  <v-app>
    <v-app-bar
      color="blue-grey darken-4"
      dark
      flat
      app
    >
      <router-link
        text
        to="/"
        class="headline"
        style="text-decoration: none; color: white;"
      >
        <v-icon>mdi-play-network-outline</v-icon>
        MEDIA SERVER
      </router-link>
      <v-spacer />
      <div v-if="user">
        <v-btn
          text
          to="/myAccount"
          class="px-3"
          style="text-decoration: none; color: white; font-size: 0.8em;"
        >
          MY ACCOUNT
        </v-btn>
        <v-btn
          text
          @click="logout"
          class="px-3"
          style="text-decoration: none; color: white; font-size: 0.8em;"
        >
          LOGOUT
        </v-btn>
      </div>
      <div v-else>
        <v-btn
          text
          to="/login"
          class="px-3"
          style="text-decoration: none; color: white; font-size: 0.8em;"
        >
          LOGIN
        </v-btn>
      </div>

      <template v-slot:extension>
        <v-tabs
          v-model="tab"
          centered
        >
          <v-tabs-slider color="yellow" />
          <v-tab
            v-for="item in items"
            :key="item.link"
            :to="item.link"
          >
            {{ item.item }}
          </v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>

    <v-footer
      app
      color="blue-grey darken-4"
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
import { logout } from './mixins/logout'

export default {
  mixins: [logout],
  data () {
    return {
      tab: null,
      items: [
        { item: 'home', link: '/' },
        { item: 'playlist', link: '/playlist' },
        { item: 'filelist', link: '/filelist' },
        { item: 'scheduler', link: '/scheduler' },
        { item: 'player', link: '/player' },
        { item: 'ipaddress', link: '/ipaddr' },
        { item: 'reboot', link: '/reboot' }
      ]
    }
  },
  computed: {
    ...mapState({
      user: state => state.users.user
    })
  },
  created () {
    this.$axios.get('/api/users/login').then((res) => {
      if (res.data.user) {
        this.$store.dispatch('users/updateUser', res.data.user)
      } else {
        this.$store.dispatch('users/updateUser', null)
      }
    })
  }
}
</script>
