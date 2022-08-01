<template>
  <div class="profile_info-root">
    <div class="profile_info-wrapper">
      <div class="profile-image">
        <img src="/profile/index.png" alt="" />
      </div>
      <div class="profile-info">
        <div>{{ user.userName }}</div>
        <div>Free</div>
      </div>
    </div>
    <button class="profile_info-button" @click="SETshowModal(true)">
      <span>Upgrade</span>
    </button>
  </div>
</template>
<script>
export default {
  methods: {
    SETshowModal(b) {
      this.$store.commit("profile/settings/SET_SHOW_MODAL", b);
    },
  },
  computed: {
    user() {
      return this.$auth.user;
    },
  },
};
</script>
<style lang="scss">
.profile_info-root {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin: 14px 18px 0 18px;
}
.profile_info-wrapper {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
}
.profile-info {
  margin-left: 7px;
}
.profile_info-button {
  width: 82px;
  height: 27px;
  background: $gradient-1;
  border-radius: 8px;
  border-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  span {
    font-size: $font_size-1;
    font-family: $font-fredoka;
    font-weight: 400;
    color: $white;
  }
}
.profile_info-button:hover {
    opacity: $opasity_hov
}
</style>