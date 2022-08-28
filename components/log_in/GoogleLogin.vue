<template >
  <div class="google_login-root" @click="userLogin()">
    <img src="/google.png" alt="" />
    <span>Sign in with google</span>
  </div>
</template>
<script>
export default {
  methods: {
    async userLogin() {
      this.$auth.loginWith("google");
      let us = await this.$axios.get("/api/account/username");
      await this.$auth.setUser(us.data);
    },
  },
};
</script>
<style lang="scss">
.google_login-root {
  width: 100%;
  height: $size-12;
  background: $white;
  border-radius: $radius-6;
  border: 1px solid $grey1;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-size: $font_size-1;
    font-family: $font-fredoka;
    margin-left: 7px;
    color: $grey1;
  }
}
.google_login-root:hover {
  cursor: pointer;
  border: 1px solid $grey2;
  img {
    opacity: 0.5;
  }
  span {
    color: $grey2;
  }
}
</style>