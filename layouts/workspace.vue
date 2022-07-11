<template>
  <div class="app">
    <div class="sidebar">
      <SideBar/>
    </div>

    <div class="body">
      <div class="header">
        <HeadersHeaderWs/>
      </div>
      <Nuxt class="content" />
    </div>
  </div>
</template>
<script>
export default {
  async beforeMount() {
    if(this.loggedIn){
           let us = await this.$axios.get("/api/account/username");
     await this.$auth.setUser(us.data);
      this.$store.dispatch("workspace/SET_WORKSPACES");

    }
//await this.$auth.fetchUser()

    // Считываем информацию о статусе в sessionStorage при загрузке страницы
    // if (sessionStorage.getItem("store")) {
    //   this.$store.replaceState(
    //     Object.assign(
    //       {},
    //       this.$store.state.workspace.workspaces,
    //       JSON.parse(sessionStorage.getItem("store"))
    //     )
    //   );
    //   sessionStorage.removeItem("store")
    // } else {
    //}

    // Сохраняем информацию в vuex в sessionStorage при обновлении страницы
    // Событие beforeunload запускается первым при обновлении страницы
    //window.addEventListener("beforeunload", () => {
      //sessionStorage.setItem("store", JSON.stringify(this.$store.state.workspace.workspaces));
      //console.log(JSON.stringify(this.$store.state))
    //});
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
.content {
  display: block;
}
</style>