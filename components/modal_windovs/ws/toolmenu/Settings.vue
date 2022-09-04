<template>
  <div
    @click.self="closeModal"
    class="toolmenu_settings_modal_ws-mask"
    v-if="GETshowModal"
  >
    <div class="toolmenu_settings_modal_ws-container">
      <div class="toolmenu_settings_modal_ws-stripe"></div>
      <div class="toolmenu_settings_modal_ws-header">Rename Workspace</div>

      <div class="toolmenu_settings_modal_ws-body">
        <input
          class="style_input"
          type="text"
          placeholder="Workspace name"
          v-model="newWs.name"
        />
        <div>
          <button @click="closeModal">Close</button>
          <button @click="rename">Rename</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "ModalToolmenuSettings",

  data() {
    return {
      newWs: {
        name: "",
      },
    };
  },
  methods: {
    closeModal() {
      this.$store.commit("workspace/toolmenu/SET_SHOW_MODAL_RENAME", false);
    },
    async rename() {
      try {
        this.$store.dispatch("workspace/toolmenu/RENAME", this.newWs.name);
        this.closeModal();
      } catch (err) {
        console.log(err);
      }
    },
  },
  computed: {
    GETshowModal() {
      return this.$store.state.workspace.toolmenu.showModalRename;
    },
  },
};
</script>

<style lang="scss">
$width_create_ws_modal: 444px;
.toolmenu_settings_modal_ws-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: $modal_mask;
  display: flex;
  align-items: center;
  justify-content: center;
}

.toolmenu_settings_modal_ws-container {
  width: $width_create_ws_modal;
  height: 213px;
  margin: 0px auto;
  background-color: $white;
  text-align: center;
  border-radius: $radius_modal;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  
}

.toolmenu_settings_modal_ws-stripe {
  width: $width_create_ws_modal;
  height: 28px;
  border-top-left-radius: $radius_modal;
  border-top-right-radius: $radius_modal;

  background: $pink1;
  margin: 0;
  padding: 0;
}

.toolmenu_settings_modal_ws-header {
  font-size: $font_size-2;
  margin-top: 14px;
  color: $grey3;
}

.toolmenu_settings_modal_ws-body {
  margin-top: 29px;
  input {
    width: 356px;
    height: 43px;
    font-size: $font_size-1;
    background: $grey4;
    outline-color: none;
    border-style: none;
    border-radius: 8px;
    border: 1px solid $grey4;
  }
  div {
    margin-top: 18px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: flex-start;
    button {
      width: 137px;
      height: 33px;
      border-radius: 8px;
      font-size: $font_size-1;
      border-style: none;
      background: $grey5;
      color: $grey2;
      &:hover {
        background: $pink1;
        color: $white;
      }
      &:active {
        background: $pink2;
      }
    }
  }
}
</style>
