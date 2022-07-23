<template>
  <div class="logIn-root">
    <div class="logIn-logo">
      <LogInLogo />
    </div>
    <div v-if="isShow">
      <h1>Welcome to xtiles</h1>
      <div class="text">
        Don`t have an account?  <span class="link1" @click="showD">Sign up for free</span>
      </div>
      <div class="form-login">
        <LogInLoginForm />
      </div>
    </div>
    <div v-if="!isShow">
      <h1>Create Account</h1>
      <div class="text">
        Already have an account?  <span class="link1" @click="showD">Sign In</span>
      </div>
      <div class="forn-reg">
        <LogInRegForm />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  //auth: false,
  data() {
    return {
      showF: true,
    };
  },
  methods: {
    showD() {
      this.showF = !this.showF;
    },
  },
  computed: {
    isShow() {
      return this.showF;
    },
  },
};
</script>

<style lang="scss">
.logIn-root {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  background: $color-8;
  border-radius: $radius-5;
  font-family: $font-fredoka;
  text-align: center;

  h1 {
    margin: 0;
    margin-top: 28px;
    font-size: $font_size-2;
    line-height: 29px;
    color: $color-9;
    font-weight: 400;
  }
}
.logIn-logo {
  margin: 0;
  margin-top: 53px;
  overflow: auto;
}
.text {
  font-weight: 400;
  font-size: $font_size-3;
  line-height: 12px;
  color: $color-9;
  margin: 0;
  margin-top: 14px;

  span {
    text-decoration: underline;
    color: $color-4;
    background: $color-2;
  }

}
</style>
