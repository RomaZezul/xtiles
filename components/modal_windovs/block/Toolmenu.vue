<template>
  <div
    @click.self="closeModal"
    class="toolmenu_modal_block-mask"
    v-if="GETshowModal"
  >
    <div
      class="toolmenu_modal_block-wrapper"
      :style="{ left: coords.left, top: coords.top }"
    >
      <div class="toolmenu_modal_block-container">
        <button @click="closeModal">Close</button>
        <button @click="deleteBlock">Delete</button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "ModalToolmenuBlock",

  methods: {
    closeModal() {
      this.$store.commit("block/toolmenu/SET_SHOW_MODAL", false);
    },
    deleteBlock(){
      this.$store.dispatch("block/DELETE_BLOCK");
      this.closeModal();
    }
  },
  computed: {
    GETshowModal() {
      return this.$store.state.block.toolmenu.showModal;
    },
    coords() {
      return this.$store.state.block.toolmenu.coords;
    },
  },
};
</script>


<style lang="scss">
.toolmenu_modal_block-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.toolmenu_modal_block-wrapper {
  position: absolute;
}

.toolmenu_modal_block-container {
  width: 200px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: $white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
}
</style>
