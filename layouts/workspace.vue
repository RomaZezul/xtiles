<template>
  <div class="app">
    <aside class="app_aside">

      <SideBar />
    </aside>
    <main class="app_main">
      <Nuxt />
    </main>
    <header class="app_header">
      <AppBar />
    </header>
    <ModalWindovsCreateWs />
    <ModalWindovsProfile />
    <ModalWindovsToolmenuWs />
  </div>
</template>
<script>
export default {
  name: "LayoutWs",
  async beforeMount() {
    if (this.$auth.loggedIn) {
      this.$store.dispatch("workspace/SET_WORKSPACES");
      let us = await this.$axios.get("/api/account/username");
      await this.$auth.setUser(us.data);
      // this.$store.commit(
      //   "workspace/SET_CURENT_WS",
      //   JSON.parse(localStorage.getItem("CurrentWs"))
      // );
      // this.$store.commit(
      //   "pagge/SET_CURENT_PAGE",
      //   JSON.parse(localStorage.getItem("CurrentPage"))
      // );
    }
  },
};
</script>

<style lang="scss">
.app {
  background: $grey4;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
}
.app_aside {
  position: fixed;
  width: $size-1;
  bottom: 0;
  top: 0;
  left: 0;
}

.app_header {
  position: fixed;
  margin-left: $size-1;
  margin-right: 10px;
  height: $size-2;
  left: 0;
  top: 6px;
  right: 0;
  background: $white;
  border-top-left-radius: $radius-1;
  border-top-right-radius: $radius-1;
}

.app_main {
  position: fixed;
  margin-left: $size-1;
  padding-top: $size-2;
  left: 0;
  top: 6px;
  right: 0;
  bottom: 0;
  background: $white;
  margin-bottom: 4px;
  margin-right: 10px;
  border-radius: $radius-1;
}
</style>