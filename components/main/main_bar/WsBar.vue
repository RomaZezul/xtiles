<template>
  <div class="ws_bar-root">
    <div class="ws_bar-breadcrumbs">{{ CurrentWs.name }}</div>
    <div class="ws_bar-buttons">
      <button class="ws_bar-button"></button>

      <button class="ws_bar-button"></button>

      <button class="ws_bar-button"></button>
    </div>
  </div>
</template>
<script>
export default {
      computed: {
    CurrentWs() {
      return this.$store.state.workspace.CurrentWs;
    },
  },

};
</script>
<style lang="scss">
.ws_bar-root {
  margin: 9px 40px 0 40px;
  padding-bottom: 7px;
  display: flex;
  justify-content: space-between;
}
.ws_bar-buttons{
  display: flex;
}
.ws_bar-button{
  margin-left: 13px;
}

</style>