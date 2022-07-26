<template>
    <div Close class="modal_profile-mask" v-if="GETshowModal">
      <div class="modal_profile-wrapper">
        <div class="modal_profile-container">
          <div class="modal_profile-header">
            <h1>{{ user.userName }}</h1>
          </div>

          <div class="modal_profile-body">
            <div>
              <h1>Name User</h1>
            </div>
            <div>
              <button @click="closeModal">Close</button>
              <button @click="logouts">logout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>


<script>
export default {
  name: "ModalWindow",

  computed: {
    loggedIn() {
      return this.$auth.loggedIn;
    },
    user() {
      return this.$auth.user;
    },
  },
  methods: {
    closeModal() {
      this.$store.commit("profile/SET_SHOW_MODAL", false);
    },

    logouts() {
      this.$auth.logout();
            this.$router.push("/");
 this.closeModal();
    },
  },
  computed: {
    GETshowModal() {
      return this.$store.state.profile.showModal;
    },

    loggedIn() {
      return this.$auth.loggedIn;
    },
    user() {
      return this.$auth.user;
    },
  },
};
</script>


<style lang="scss">
.modal_profile-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.modal_profile-wrapper {
  position: fixed;
    top: 50px;
    right: 50px;
}

.modal_profile-container {
  width: 300px;
  height: 400px;
  padding: 20px 30px;
  background-color: $white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
}

.modal_profile-header h1 {
  margin-top: 0;
  color: #42b983;
}

.modal_profile-body {
  margin: 20px 0;
}

</style>
