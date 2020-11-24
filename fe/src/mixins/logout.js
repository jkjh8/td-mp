export const logout = {
  methods: {
    logout () {
      this.$axios.get('/api/users/logout').then((res) => {
        this.$store.dispatch('users/updateUser', res.data.user)
        this.$router.push('/')
        this.$dialog.notify.info('You are logged out')
      })
    }
  }
}
