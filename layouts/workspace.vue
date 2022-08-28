<template>
  <div class="app">
    <aside class="app_aside" :style="{ left: sizeSB1 }">
      <SideBar />
    </aside>
    <main class="app_main" :style="{ 'margin-left': sizeSB }">
      <Nuxt />
    </main>
    <header class="app_header" :style="{ 'margin-left': sizeSB }">
      <AppBar />
    </header>
    <ModalWindovsWsCreate />
    <ModalWindovsProfile />
    <ModalWindovsWsToolmenu />
    <ModalWindovsBlockToolmenu />
    <ModalWindovsPaggeToolmenu />
    <ModalWindovsPaggeRename />
    <ModalWindovsWsToolmenuSettings />
    <ModalWindovsProfileSettings />
    <ModalWindovsTrash />
  </div>
</template>
<script>
export default {
  name: "LayoutWs",
  async beforeMount() {
    if (this.$auth.loggedIn) {
      let us = await this.$axios.get("/api/account/username");
      await this.$auth.setUser(us.data);
    }
    this.$store.dispatch("workspace/GET_WORKSPACE");
    this.$store.dispatch("trash/GET_LIST_PAGE");
  },
  computed: {
    sizeSB() {
      return this.$store.state.sizeSB + "px";
    },
    sizeSB1() {
      return this.$store.state.sizeSB1 + "px";
    },
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