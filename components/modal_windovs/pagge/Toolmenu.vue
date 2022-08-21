<template>
  <div
    @click.self="closeModal"
    class="toolmenu_modal_page-mask"
    v-if="GETshowModal"
  >
    <div
      class="toolmenu_modal_page-wrapper"
      :style="{ left: coords.left, top: coords.top }"
    >
      <div class="toolmenu_modal_page-container">
        <button @click="closeModal">Close</button><br />
        <button @click="addToFavorites">Add to favorites</button><br />
        <button @click="rename">Rename</button><br />
        <button @click="deletePage">Delete</button><br />
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "ModalToolmenuPage",

  methods: {
    closeModal() {
      this.$store.commit("pagge/toolmenu/SET_SHOW_MODAL", false);
    },
    deletePage() {
      this.$store.dispatch("pagge/toolmenu/DELETE_PAGE");
      this.closeModal();
    },
    addToFavorites() {
      this.$store.dispatch("pagge/toolmenu/ADD_TO_FAVORITES");
      this.closeModal();
    },
    rename() {
      this.$store.commit("pagge/toolmenu/SET_SHOW_MODAL_RENAME", true);
      this.closeModal();
    },
  },
  computed: {
    GETshowModal() {
      return this.$store.state.pagge.toolmenu.showModal;
    },
    coords() {
      return this.$store.state.pagge.toolmenu.coords;
    },
  },
};
</script>


<style lang="scss">
.toolmenu_modal_page-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.toolmenu_modal_page-wrapper {
  position: absolute;
}

.toolmenu_modal_page-container {
  width: 200px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: $white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
}
</style>
