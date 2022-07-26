<template>
  <div>
    <MainMainBarWsBar/>
    <MainPageMiniature :name = "'testPage'" :date = "222" :id="44" />
  </div>
</template>


<script>
export default {
  layout: "workspace",
  async beforeMount() {
    this.$store.dispatch("workspace/GET_WORKSPACE", 
     this.$route.params.pathMatch,
    );
  },

  computed: {
    CurrentWs() {
      return this.$store.state.workspace.CurrentWs;
    },
  },
};
</script>