<template>
  <v-dialog
    ref="dialog"
    v-model="dateModal"
    :return-value.sync="date"
    persistent
    width="290px"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        v-model="date"
        :label="label"
        prepend-icon="mdi-calendar"
        readonly
        v-bind="attrs"
        v-on="on"
      ></v-text-field>
    </template>
    <v-date-picker
      v-model="date"
      scrollable
      locale="ko"
    >
      <v-spacer></v-spacer>
      <v-btn
        text
        color="primary"
        @click="dateModal = false"
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
    </v-date-picker>
  </v-dialog>
</template>

<script>
export default {
  props: ['label', 'recvDate'],
  data () {
    return {
      date: this.recvDate,
      dateModal: false
    }
  },
  watch: {
    recvDate (val) {
      console.log(val)
      this.date = val
    }
  },
  methods: {
    click () {
      this.$refs.dialog.save(this.date)
      this.$emit('click', this.date)
    }
  }
}
</script>
