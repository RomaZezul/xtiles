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
          v-model="login.email"
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          id="Password"
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
  data() {
    return {
      login: {
        email: '',
        password: '',
      },
    }
  },
  async beforeCreate() {
    console.log(this.$auth.user)
    if (this.$auth.loggedIn) this.$router.push('/user/login')
  },
  computed: {
    loggedIn() {
      return this.$auth.loggedIn
    },
  },
  methods: {
    async userLogin() {
      try {
        let response = await this.$auth.loginWith('local', { data: this.login })

        console.log(response)
        console.log(this.$auth.user)
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>

<style>
</style>
