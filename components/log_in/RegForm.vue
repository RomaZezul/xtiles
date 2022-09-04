<template>
  <div class="reg_form-root">
    <form @submit.prevent="userRegister">
      <input
        type="username"
        id="inputUsername"
        placeholder="username"
        required=""
        autocomplete="username"
        v-model="register.userName"
      />
      <input
        type="email"
        id="email"
        placeholder="email"
        autocomplete="email"
        required=""
        v-model="register.email"
      />
      <input
        type="password"
        id="Password"
        placeholder="password"
        required=""
        autocomplete="current-password"
        v-model="register.password"
      />
      <button class="form-button" type="submit">Create Account</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      register: {
        userName: "",
        email: "",
        password: "",
      },
    };
  },

  auth: false,

  methods: {
    async userRegister() {
      try {
        let response = await this.$axios.post("/api/registration", {
          userName: this.register.userName,
          email: this.register.email,
          password: this.register.password,
        });
        console.log(response);
        await this.$auth.loginWith("local", {
          data: {
            email: this.register.email,
            password: this.register.password,
          },
        });
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

.reg_form-root {
  input {
    @include input_form;
  }
  span {
    margin: 0;
    font-size: $font_size-1;
  }
  button {
    @include button_form;
  }
}
</style>
