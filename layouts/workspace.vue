<template>
  <div class="app">
    <aside class="app_aside">
      <SideBar />
    </aside>
    <header class="app_header">
      <HeadersHeaderWs />
    </header>
    <main class="app_main">
      <Nuxt />
    </main>
    <ModalWindovsCreateWs />
    <ModalWindovsProfile />
  </div>
</template>
<script>
export default {
  async beforeMount() {
    if (this.loggedIn) {
      let us = await this.$axios.get("/api/account/username");
      await this.$auth.setUser(us.data);
      this.$store.dispatch("workspace/SET_WORKSPACES");
    }
  },
  computed: {
    loggedIn() {
      return this.$auth.loggedIn;
    },
    user() {
      return this.$auth.user;
    },
  },
  methods: {
    logouts() {
      this.$auth.logout();
      this.$router.push("/");
    },
  },
};
</script>

<style>
.app {
  display: block;
}
.app_aside {
  position: fixed;
  width: 240px;
  bottom: 0;
  top: 0;
  left: 0;
}
.app_header {
  position: fixed;
  margin-left: 240px;
  height: 100px;
  left: 0;
  top: 0;
  right: 0;
}
.app_main {
  position: fixed;
  margin-left: 240px;
  margin-top: 100px;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}
</style>