<template>
  <div class="login_form-root">
    <form @submit.prevent="userLogin">
      <div>
        <input class="style_input"
          type="email"
          id="email"
          placeholder="email"
          required=""
          autocomplete="email"
          v-model="login.email"
        />
      </div>
      <div>
        <input class="style_input"
          type="password"
          id="Password"
          autocomplete="current-password"
          placeholder="password"
          required=""
          v-model="login.password"
        />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
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
  input {
    width: $size-11;
    height: $size-12;

    background: $color-1;
    border-radius: $radius-6;
  outline-color: $color-5;
    //border-style: none;
        border: 1px solid $color-8;

    margin: 0;
    margin-top: 17px;
  }
}
</style>
