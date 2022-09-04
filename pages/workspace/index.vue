<template>
  <div class="workspace-root">
    <MainMainBarWsBar />
    <div class="main-scrol">
      <div class="main-wrapper">
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
  beforeMount() {
    if (localStorage.getItem("CurrentWs") == null) {
      this.$router.push("/personal");
    }
    this.$store.commit("SWITCH_PAGE", false)
  },

  computed: {
    pages() {
      return this.$store.state.pagge.pages;
    },
  },
};
</script>

<style lang="scss">
.workspace-root {
  display: flex;
  height: 100%;
  flex-direction: column;
}
.main-scrol {
  overflow: overlay;
  margin-bottom: 10px;
}
.main-wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 32px;
  grid-row-gap: 32px;
  margin: 27px 40px;
}

@media (min-width: 1480px) {
  .main-wrapper {
    grid-template-columns: repeat(4, 1fr);
  }
}
@media (max-width: 1024px) {
  .main-wrapper {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 480px) {
  .main-wrapper {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>