<template>
  <v-dialog
    ref="dialog"
    v-model="modal"
    :return-value.sync="time"
    persistent
    width="290px"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        v-model="time"
        :label="label"
        prepend-icon="mdi-clock-outline"
        readonly
        v-bind="attrs"
        v-on="on"
        :error-messages="timeErrors"
        @input="$v.time.$touch()"
        @blur="$v.time.$touch()"
      ></v-text-field>
    </template>
    <v-time-picker
      v-if="modal"
      v-model="time"
      full-width
    >
      <v-spacer></v-spacer>
      <v-btn
        text
        color="primary"
        @click="modal = false"
      >
        Cancel
      </v-btn>
      <v-btn
        text
        color="primary"
        @click="click"
      >
        OK
      </v-btn>
    </v-time-picker>
  </v-dialog>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],
  props: ['label', 'recvTime'],
  validations: {
    time: { required }
  },
  data () {
    return {
      time: this.recvTime,
      modal: false
    }
  },
  watch: {
    recvTime (val) {
      console.log(val)
      this.time = val
    }
  },
  computed: {
    timeErrors () {
      const errors = []
      if (!this.$v.time.$dirty) { return errors }
      !this.$v.time.required && errors.push('time is required.')
      return errors
    }
  },
  methods: {
    click () {
      this.$refs.dialog.save(this.time)
      this.$emit('click', this.time)
    }
  }
}
</script>
