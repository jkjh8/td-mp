<template>
  <form>
    <v-card
      class="mx-auto my-12"
      max-width="400px"
    >
      <v-card-title>
        Login
      </v-card-title>
      <v-card-text>
        <v-alert :type="alertType" :value="errmsg" transition="scroll-y-transition">
          {{ message }}
        </v-alert>
        <v-text-field
          v-model="userInfo.id"
          label="ID"
          :error-messages="idErrors"
          @input="$v.userInfo.id.$touch()"
          @blur="$v.userInfo.id.$touch()"
        />
        <v-text-field
          v-model="userInfo.password"
          v-on:keyup.enter="submitForm"
          label="Password"
          :error-messages="pwErrors"
          :value="isPwd"
          :append-icon="isPwd ? 'mdi-eye-off' : 'mdi-eye'"
          :type="isPwd ? 'password' : 'text'"
          @click:append="isPwd = !isPwd"
          @input="$v.userInfo.password.$touch()"
          @blur="$v.userInfo.password.$touch()"
        />
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn
          @click="submitForm"
        >
          Submit
        </v-btn>
        <v-btn to="/">
          CANCEL
        </v-btn>
      </v-card-actions>
    </v-card>
  </form>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { minLength, required } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],
  validations: {
    userInfo: {
      id: { required, minLength: minLength(4) },
      password: { required, minLength: minLength(8) }
    }
  },
  data () {
    return {
      userInfo: {
        id: null,
        password: null
      },
      message: null,
      isPwd: true,
      errmsg: false,
      alertType: 'success'
    }
  },
  computed: {
    idErrors () {
      const errors = []
      if (!this.$v.userInfo.id.$dirty) { return errors }
      !this.$v.userInfo.id.minLength && errors.push('Id must be at least 4 characters long')
      !this.$v.userInfo.id.required && errors.push('Id is required.')
      return errors
    },
    pwErrors () {
      const errors = []
      if (!this.$v.userInfo.password.$dirty) { return errors }
      !this.$v.userInfo.password.minLength && errors.push('Password must be at least 8 characters long')
      !this.$v.userInfo.password.required && errors.push('Password is required.')
      return errors
    }
  },
  watch: {
    errmsg (val) {
      if (!val) { return }
      setTimeout(() => (this.errmsg = false), 2000)
    }
  },
  methods: {
    submitForm () {
      this.$axios.post('/api/users/login', this.userInfo).then((res) => {
        this.$store.dispatch('users/updateUser', res.data.user)
        this.$router.push('/')
      }).catch((err) => {
        this.message = err.response.data.message
        this.alertType = 'error'
        this.errmsg = true
      })
    }
  }
}
</script>
