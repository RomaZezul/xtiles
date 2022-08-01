<template>
  <div>
        <MainMainBarWsBar />

    <h1>PersonalPage</h1>
  </div>
</template>

<script>
export default {
  layout: "workspace",
  beforeMount() {
    this.$store.commit("workspace/SET_CURENT_WS", {
      name: "Personal Page",
      id: 0,
    });
    this.$store.commit("SWITCH_PAGE", false);
  },
};
</script>
<style lang="scss">
</style>