<template>
  <div @click.self="closeModal" class="modal_profile-mask" v-if="GETshowModal">
    <div class="modal_profile-container">
      <div class="createw_ws_modal-stripe"></div>

      <div class="modal_profile-header">Profile</div>
      <ModalWindovsProfileInfo />
      <div class="modal_profile-body">
        <button @click="SETshowModal()">Account Settings</button>
        <div class="modal_profile-logout">
          <span @click="logouts">Sign out</span>
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
    SETshowModal(){}
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
     @import './assets/scss/mixin/buttton_stile.scss';

$width_modal_profile: 348px;

.modal_profile-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.modal_profile-container {
  position: fixed;
  top: 50px;
  right: 50px;

  width: $width_modal_profile;
  height: auto;
  background-color: $white;
  border-radius: $radius_modal;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
}
.createw_ws_modal-stripe {
  width: $width_modal_profile;
  height: $stripe_height;
  border-top-left-radius: $radius_modal;
  border-top-right-radius: $radius_modal;
  background: $pink1;
  margin: 0;
  padding: 0;
}

.modal_profile-header {
  font-size: $font_size-2;
  margin-top: 14px;
  padding-left: 18px;
  color: $grey3;
  border-bottom: 1px solid $grey4;
  margin: 0 18px;
  padding: 14px 0;
}

.modal_profile-body {
  padding: 0 18px;
  margin-bottom: 14px;
  button {
    width: 153px;
    height: 34px;
    border-radius: 8px;
    font-size: $font_size-1;
    border-style: none;
    background: $white;
    color: $grey3;
    margin-top: 22px;
  }
  button:hover {
    background: $pink1;
    color: $white;
  }
  button:active {
    background: $pink2;
  }
}
.modal_profile-logout {
  text-align: right;
  margin-top: 44px;
  // span {
  @include link; // }
}
</style>
