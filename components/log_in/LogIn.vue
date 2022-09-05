<template>
  <div class="logIn-root">
    <LogInLogo />
    <div v-if="isShow" class="logIn-wrap">
      <h1>Welcome to xtiles</h1>
      <div class="text">
        Don`t have an account?
        <span @click="showD">Sign up for free</span>
      </div>
      <LogInLoginForm />
    </div>
    <div v-if="!isShow" class="logIn-wrap">
      <h1>Create Account</h1>
      <div class="text">
        Already have an account?
        <span @click="showD">Sign In</span>
      </div>
      <LogInRegForm />
    </div>
    <div class="or">
      <div></div>
      <span>Or Continue With</span>
      <div></div>
    </div>
    <LogInGoogleLogin />
  </div>
</template>

<script>
export default {
  //props:["showF"],
  data() {
    return {
      //showF: true,
    };
  },
  methods: {
    showD() {
      this.$store.commit("SET_SHOW_F", !this.$store.state.showF);
    },
  },
  computed: {
    isShow() {
      return this.$store.state.showF;
    },
  },
};
</script>

<style lang="scss">
@import "./assets/scss/mixin/buttton_stile.scss";

.logIn-root {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: $white;
  border-radius: $radius-5;

  text-align: center;
  padding: 30px 57px;
}
h1 {
  margin: 0;
  margin-top: 28px;
  font-size: $font_size-2;
  color: $grey3;
  font-weight: 400;
}

.logIn-wrap {
  min-width: 380px;
  max-width: 380px;
}
.text {
  font-weight: 400;
  font-size: $font_size-1;
  color: $grey3;
  margin: 0;
  margin-top: 14px;
  span {
    @include link;
  }
}
.or {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  width: 100%;
  div {
    width: 100%;
    height: 1px;
    background: $grey4;
  }
  span {
    white-space: nowrap;
    margin: 14px;
    color: $grey3;
  }
}
</style>
