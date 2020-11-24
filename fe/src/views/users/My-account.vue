<template>
  <v-container>
    <v-card
      class="mx-auto"
      max-width="400px"
    >
      <v-card-title>
        My Account
      </v-card-title>
      <v-card-text>
        <div>
          <h2>{{ this.user.name }}</h2>
        </div>
        <div class="my-3">
          <strong>{{ this.user.email }}</strong>
        </div>
        <div style="text-align: right;">
          <v-btn
            @click='logout'
            class="btn btn-danger"
          >
            LOGOUT
          </v-btn>
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import { logout } from '../../mixins/logout'

export default {
  mixins: [logout],
  computed: {
    ...mapState({
      user: state => state.users.user
    })
  }
}
</script>
