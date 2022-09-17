<template >
  <div class="page-root">
    <MainMainBarPageBar />
    <MainPageContent />
  </div>
</template>
<script>
export default {
  layout: "workspace",
  created() {
    this.$store.commit("SWITCH_PAGE", true); //показ. хлебные крошки
    this.$store.commit("block/SET_BLOCKS", []);
  },
  beforeMount() {
    if (localStorage.getItem("CurrentPage") == null) {
      this.$router.push("/personal");
    }
    if (localStorage.getItem("CurrentPage") == 0) {
      this.$store.dispatch("pagge/CREATE_PAGE");
    } else {
      this.$store.dispatch("pagge/GET_PAGE");
    }
  },
  mounted() {},
  computed: {
    CurrentPage() {
      if (this.$store.state.pagge.CurrentPage) {
        return this.$store.state.pagge.CurrentPage;
      } else return "";
    },
  },
};
</script>
<style lang="scss">
.page-root {
  height: 100%;
  margin: 0 40px;
  display: flex;
  flex-direction: column;
}
</style>