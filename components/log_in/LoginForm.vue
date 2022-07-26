<template>
  <div class="login_form-root">
    <form @submit.prevent="userLogin">
      <input
        class="style_input"
        type="email"
        id="email"
        placeholder="email"
        required=""
        autocomplete="email"
        v-model="login.email"
      />
      <div style="text-align: right; margin-top: 30px; margin-bottom: -8px">
        <span class="link1">Forgot Password?</span>
      </div>
      <input
        class="style_input"
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
        let response = await this.$auth.loginWith("local", {
          data: this.login,
        });
        await this.$auth.setUser(response.data);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
<style lang="scss">
.login_form-root {
  width: $size-11;
  input {
    width: $size-11;
    height: $size-12;
    background: $grey4;
    border-radius: $radius-6;
    outline-color: $grey1;
    border: 1px solid $white;
    margin: 0;
    padding: 0;
    margin-top: 16px;
    font-size: $font_size-1;
    font-family: $font-fredoka;
  }
  span {
    margin: 0;
    font-size: $font_size-3;
  }
  button {
    width: $size-11;
    height: $size-12;
    font-size: $font_size-1;
    font-family: $font-fredoka;

    background: $pink1;
    color: $white;
    border-radius: $radius-6;
    border: 1px solid $white;
    margin: 0;
    margin-top: 28px;
  }
}
</style>
