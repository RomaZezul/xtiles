<template>
  <div>
    <form @submit.prevent="userLogin">
      <div>
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="email"
          required=""
          autocomplete="email"
          v-model="login.email"
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          id="Password"
          autocomplete="current-password"
          placeholder="Пароль"
          required=""
          v-model="login.password"
        />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
    <div>
      <hr />
      <NuxtLink tag="button" to="/user/registration" exact>
        Sign Up For Free
      </NuxtLink>
    </div>
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
  async beforeCreate() {
    //await this.$auth.fetchUser()
    //console.log(this.$auth.loggedIn);
    //if (this.$auth.loggedIn) this.$router.push('/user/login')
    //this.$router.push('/')
  },
  computed: {
    loggedIn() {
      return this.$auth.loggedIn;
    },
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

<style>
</style>
