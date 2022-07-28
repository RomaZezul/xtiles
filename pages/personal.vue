<template>
  <div>
    <h1>PersonalPage</h1>
  </div>
</template>

<script>
export default {
  layout: "workspace",
  beforeMount() {
      this.$store.commit("workspace/SET_CURENT_WS", {
        name: '',
        id: 0,
      });
  },
};
</script>
<style lang="scss">
</style>