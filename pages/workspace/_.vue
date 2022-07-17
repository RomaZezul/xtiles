<template>
  <div>
    <h1 id="h1">{{ CurrentWs.name }}</h1>
    <h2>CONTENT</h2>
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
      //return JSON.parse(localStorage.getItem("CurrentWs"));
    },
  },
};
</script>