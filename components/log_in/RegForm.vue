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
  input {
    width: 100%;
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
    width: 100%;
    height: $size-12;
    font-size: $font_size-1;
    font-family: $font-fredoka;
    background: $pink1;
    color: $white;
    border-radius: $radius-6;
    border: 1px solid $white;
    margin: 0;
    padding: 0;
    margin-top: 28px;
  }
}
</style>
