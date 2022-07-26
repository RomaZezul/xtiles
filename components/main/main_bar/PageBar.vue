<template>
  <div class="page_bar-root">
    <div class="page_bar-breadcrumbs">PAGE</div>
    <div class="page_bar-buttons">
      <button class="page_bar-button"></button>

      <button class="page_bar-button"></button>

      <button class="page_bar-button"></button>
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
.page_bar-root {
  margin: 9px 40px 0 40px;
  padding-bottom: 7px;
  display: flex;
  justify-content: space-between;
}
.page_bar-buttons{
  display: flex;
}
.page_bar-button{
  margin-left: 13px;
}

</style>