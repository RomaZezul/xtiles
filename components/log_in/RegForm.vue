<template>
  <div class="reg_form-root">
    <form @submit.prevent="userRegister">
      <input
        class="style_input"
        type="username"
        id="inputUsername"
        placeholder="username"
        required=""
        autocomplete="username"
        v-model="register.userName"
      />
      <input
        class="style_input"
        type="email"
        id="email"
        placeholder="email"
        autocomplete="email"
        required=""
        v-model="register.email"
      />
      <input
        class="style_input"
        type="password"
        id="Password"
        placeholder="password"
        required=""
        autocomplete="current-password"
        v-model="register.password"
      />
      <button class="form-button" type="submit">Регистрация</button>
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
.reg_form-root {
  width: $size-11;
  input {
    width: $size-11;
    height: $size-12;
    background: $color-1;
    border-radius: $radius-6;
    outline-color: $color-5;
    border: 1px solid $color-8;
    margin: 0;
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

    background: $color-4;
    color: $color-2;
    border-radius: $radius-6;
    border: 1px solid $color-8;
    margin: 0;
    margin-top: 28px;
  }
}
</style>
