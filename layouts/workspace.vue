<template>
  <div class="app">
    <div class="sidebar">
      <Sidebar />
    </div>

    <div class="body">
      <div class="header">
          <Header />
      </div>
      <Nuxt class="content" />
    </div>
  </div>
</template>
<script>
import Sidebar from '~/components/side_bar/side_bar.vue'
import Header from '~/components/headers/header_workspace/header_workspace.vue'
export default {
  components: {
    Sidebar,
    Header,
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
.app {
  display: flex;
  flex: 1 1;
  min-height: 0;
}
.sidebar {
  position: relative;
  display: flex;
  flex-shrink: 0;
  width: 240px;
  cursor: pointer;
}
.body {
  position: relative;
  display: flex;
  flex: 1 1;
  flex-direction: column;
}
.header {
  display: block;
}
.content{
  display: block;
}

</style>