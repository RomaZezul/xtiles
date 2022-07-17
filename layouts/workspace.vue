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
    this.$store.dispatch("workspace/SET_WORKSPACES");
    let us = await this.$axios.get("/api/account/username");
    await this.$auth.setUser(us.data);
    this.$store.commit(
      "workspace/SET_CURENT_WS",
      JSON.parse(localStorage.getItem("CurrentWs"))
    );
  },
};
</script>

<style lang="scss">

.app {
  background: $color-1;
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
  margin-top: 6px;
  margin-left: $size-1;
  margin-right: 10px;
  height: $size-2;
  left: 0;
  top: 0;
  right: 0;
  background: $color-2;
  border-top-left-radius: $radius-1;
  border-top-right-radius: $radius-1;
}
.app_main {
  position: fixed;
  margin-left: $size-1;
  margin-top: $size-2;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: $color-2;
  margin-bottom: 4px;
  margin-right: 10px;
  border-bottom-right-radius: $radius-1;
  border-bottom-left-radius: $radius-1;
}
</style>