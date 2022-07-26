<template>
  <transition name="modal">
    <div class="createw_ws_modal-mask" v-if="GETshowModal">
      <div class="createw_ws_modal-wrapper">
        <div class="createw_ws_modal-container">
          <div class="createw_ws_modal-header">
            <h1>Create Workspace</h1>
          </div>

          <div class="createw_ws_modal-body">
            <div>
              <label>Name Workspace</label>
              <input type="text" v-model="newWs.name" />
            </div>
            <div>
              <button @click="closeModal">Close</button>
              <button @click="createWorkspace">Create</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
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


<style scoped>
.createw_ws_modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.createw_ws_modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.createw_ws_modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.createw_ws_modal-header h1 {
  margin-top: 0;
  color: #426eb9;
}

.createw_ws_modal-body {
  margin: 20px 0;
}

.createw_ws_modal-default-button {
  float: right;
}


.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .createw_ws_modal-container,
.modal-leave-active .createw_ws_modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
