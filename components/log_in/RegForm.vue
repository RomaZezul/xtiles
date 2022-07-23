<template>
  <div>
    <form @submit.prevent="userRegister">
      <div>
        <input class="style_input"
          type="username"
          id="inputUsername"
          placeholder="username"
          required=""
          autocomplete="username"
          v-model="register.userName"
        />
      </div>
      <div>
        <input class="style_input"
          type="email"
          id="email"
          placeholder="email"
          autocomplete="email"
          required=""
          v-model="register.email"
        />
      </div>
      <div>
        <input class="style_input"
          type="password"
          id="Password"
          placeholder="password"
          required=""
          autocomplete="current-password"
          v-model="register.password"
        />
        <div>
          <button type="submit">Регистрация</button>
        </div>
      </div>
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
        this.$router.push("/workspace");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
<style></style>
