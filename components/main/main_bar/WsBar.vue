<template>
  <div class="ws_bar-root">
    <div @click="rename()" class="ws_bar-ws_name">{{ CurrentWs.name }}</div>
    <div class="ws_bar-buttons">
      <button class="ws_bar-button"></button>

      <button class="ws_bar-button"></button>
      <MainMainBarBattonsCreateNewPage class="ws_bar-button" />
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    rename() {
      this.$store.commit("workspace/toolmenu/SET_WS", {
        id: localStorage.getItem("CurrentWs")
      });
      this.$store.commit("workspace/toolmenu/SET_SHOW_MODAL_RENAME", true);
    },
  },
  computed: {
    CurrentWs() {
      return this.$store.state.workspace.CurrentWs;
    },
  },
};
</script>
<style lang="scss">
.ws_bar-root {
  margin: 18px 40px 0 40px;
  padding-bottom: 7px;
  display: flex;
  justify-content: space-between;
}
.ws_bar-ws_name {
  font-family: $font-fredoka;
  font-size: $font_size-2;
  text-align: left;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.ws_bar-buttons {
  display: flex;
}
.ws_bar-button {
  margin-left: 13px;
}
</style>