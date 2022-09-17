<template>
  <div class="page_workspace-root">
    <MainMainBarWsBar />
    <div class="page_main-scrol">
      <div class="page_main-wrapper">
        <MainPageMiniature
          v-for="item in pages"
          :key="item.id"
          :id="item.id"
          :name="item.name"
          :date="item.dateCreate"
          :favorite="item.favourite"
        >
        </MainPageMiniature>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "workspace",
  async beforeMount() {
    // this.$store.commit("workspace/SET_CURENT_WS", {
    //   name: "Personal Page",
    //   id: 0,
    // });
    this.$store.commit("SWITCH_PAGE", false);


    let res = await this.$axios.get("/api/workspaces/personal");


    
    this.$store.commit("workspace/SET_CURENT_WS", {
      name: res.data.name,
      id: res.data.id,
    });
    this.$store.commit("workspace/SET_PERS", res.data.id);

    this.$store.dispatch("workspace/GET_WORKSPACE");
  },
  computed: {
    pages() {
      return this.$store.state.pagge.pages;
    },
  },
};
</script>
<style lang="scss">
.page_workspace-root {
  display: flex;
  height: 100%;
  flex-direction: column;
}
.page_main-scrol {
  overflow: overlay;
  margin-bottom: 10px;
}
.page_main-wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 32px;
  grid-row-gap: 32px;
  margin: 27px 40px;
}

@media (min-width: 1480px) {
  .page_main-wrapper {
    grid-template-columns: repeat(4, 1fr);
  }
}
@media (max-width: 1024px) {
  .page_main-wrapper {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 480px) {
  .page_main-wrapper {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>