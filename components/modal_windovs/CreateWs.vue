<template>
  <div
    @click.self="closeModal"
    class="create_ws_modal-mask"
    v-if="GETshowModal"
  >
    <div class="create_ws_modal-container">
      <div class="create_ws_modal-stripe"></div>
      <div class="create_ws_modal-header">Create Workspace</div>

      <div class="create_ws_modal-body">
        <input
          class="style_input"
          type="text"
          placeholder="Workspace name"
          v-model="newWs.name"
        />
        <div>
          <button @click="closeModal">Close</button>
          <button @click="createWorkspace">Create</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "ModalWindow",

  data() {
    return {
      newWs: {
        name: "",
      },
    };
  },
  methods: {
    closeModal() {
      this.$store.commit("workspace/SET_SHOW_MODAL", false);
    },
    async createWorkspace() {
      try {
        this.$store.dispatch("workspace/CREATE_WORKSPACE", this.newWs.name);
        this.closeModal();
      } catch (err) {
        console.log(err);
      }
    },
  },
  computed: {
    GETshowModal() {
      return this.$store.state.workspace.showModal;
    },
  },
};
</script>

<style lang="scss">
$width_create_ws_modal: 444px;
.create_ws_modal-mask {
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

.create_ws_modal-container {
  width: $width_create_ws_modal;
  height: 213px;
  margin: 0px auto;
  background-color: $white;
  text-align: center;
  border-radius: $radius_modal;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  font-family: $font-fredoka;
}

.create_ws_modal-stripe {
  width: $width_create_ws_modal;
  height: 28px;
  border-top-left-radius: $radius_modal;
  border-top-right-radius: $radius_modal;

  background: $pink1;
  margin: 0;
  padding: 0;
}

.create_ws_modal-header {
  font-size: $font_size-2;
  margin-top: 14px;
  color: $grey3;
}

.create_ws_modal-body {
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
