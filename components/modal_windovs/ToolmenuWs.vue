<template>
  <div @click.self="closeModal" class="toolmenu_modal_ws-mask" v-if="GETshowModal">
    <div
      class="toolmenu_modal_ws-wrapper"
      :style="{ left: coords.left + 'px', top: coords.top + 'px' }"
    >
      <div class="toolmenu_modal_ws-container">
        <button @click="closeModal">Close</button><br>
        <button @click="deleteWs">Delite</button><br>
        <button @click="settingsWs">Settings</button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "ModalToolmenuWs",

  methods: {
    closeModal() {
      this.$store.commit("workspace/toolmenu/SET_SHOW_MODAL", false);
    },
    deleteWs(){
      this.$store.dispatch("workspace/toolmenu/DELETE_WS");
      this.closeModal();
    },
    settingsWs(){

    }
  },
  computed: {
    GETshowModal() {
      return this.$store.state.workspace.toolmenu.showModal;
    },
    coords() {
      return this.$store.state.workspace.toolmenu.coords;
    },
  },
};
</script>


<style lang="scss">
.toolmenu_modal_ws-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.toolmenu_modal_ws-wrapper {
  position: fixed;
}

.toolmenu_modal_ws-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: $white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
}
</style>
