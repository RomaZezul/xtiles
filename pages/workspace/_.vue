<template>
  <div>
    <h1 id="h1">{{ workspace.name }}</h1>
    <h2>CONTENT</h2>
  </div>
</template>


<script>
export default {
  layout: "workspace",
  computed: {
    workspace() {
      return this.$store.state.workspace.workspace;
    },
  },
};
</script>