<template>
  <transition name="modal">
    <div class="modal-mask" v-if="GETshowModal">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <h1>Create Workspace</h1>
          </div>

          <div class="modal-body">
            <div>
              <label>Name Workspace</label>
              <input type="text" v-model="workspace.name" />
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
      workspace: {
        name: "",
      },
    };
  },
  methods: {
    closeModal() {
      this.$store.commit("modal/SETshowModal", false);
    },
    async createWorkspace() {
      try {
        this.$store.dispatch("workspace/SET_WORKSPACE", this.workspace.name);
        this.closeModal();
      } catch (err) {
        console.log(err);
      }
    },
  },
  computed: {
    GETshowModal() {
      return this.$store.state.modal.showModal;
    },
  },
};
</script>


<style >
.modal-mask {
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

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>