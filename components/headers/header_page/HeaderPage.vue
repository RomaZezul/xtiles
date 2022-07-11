<template>
    <div>
      <h1 v-if="loggedIn">{{ user.name }}</h1>

      <hr />
      <button @click="logouts">logout</button>
      <hr />
    </div>
</template>


<script>
export default {
  components: {
  },

  computed: {
    loggedIn() {
      return this.$auth.loggedIn
    },
    user() {
      return this.$auth.user
    },
  },
  
  methods: {
    logouts() {
      console.log(this.$auth.user)
      this.$auth.logout()
      this.$router.push('/')
    },
  },
}
</script>


<style>

</style>