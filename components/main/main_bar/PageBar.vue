<template>
  <div class="page_bar-root">
    <div class="page_bar-buttons-left">
      <span @click="rename">{{ CurrentPage.name }}</span>
      <button class="page_bar-button"></button>

      <button class="page_bar-button"></button>

      <button class="page_bar-button"></button>
    </div>
    <div class="page_bar-buttons-right">
      <button class="page_bar-button"></button>

      <button class="page_bar-button"></button>

      <button class="page_bar-button"></button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    rename() {
      this.$store.commit("pagge/toolmenu/SET_PAGE", {
        id: localStorage.getItem("CurrentPage"),
      });
      this.$store.commit("pagge/toolmenu/SET_SHOW_MODAL_RENAME", true);
    },
  },
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
.page_bar-root {
  margin: 24px 0;
  padding-bottom: 7px;
  display: flex;
  justify-content: space-between;
}
.page_bar-buttons-right {
  display: flex;
}
.page_bar-buttons-left {
  span {
    font-family: $font-fredoka;
    font-size: $font_size-2;
  }
}
.page_bar-button {
  margin-left: 13px;
}
</style>