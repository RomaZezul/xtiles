<template>
  <div class="login_form-root">
    <form @submit.prevent="userLogin">
      <input
        type="email"
        id="email"
        placeholder="email"
        required=""
        autocomplete="email"
        v-model="login.email"
      />
      <div class="login_form_forgot_password">
        <span>Forgot Password?</span>
      </div>
      <input
        type="password"
        id="Password"
        autocomplete="current-password"
        placeholder="password"
        required=""
        v-model="login.password"
      />
      <button class="form-button" type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  //auth: false,
  data() {
    return {
      login: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async userLogin() {
      try {
        let response = await this.$auth.loginWith("local2", {
          data: this.login,
        });
        //await this.$auth.setUser(response.data);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
<style lang="scss">
     @import './assets/scss/mixin/buttton_stile.scss';
     @import './assets/scss/mixin/input_sile.scss';

.login_form-root {
  input {
    @include input_form;
    }
  button {
    @include button_form;
  }
}

.login_form_forgot_password {
  text-align: right;
  margin-top: 30px;
  margin-bottom: -8px;
  span {
    @include link;
  }
}
</style>
