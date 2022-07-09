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
        email: '',
        password: '',
      },
    }
  },
  async beforeCreate() {
    console.log(this.$auth.loggedIn)
    //if (this.$auth.loggedIn) this.$router.push('/user/login')
            //this.$router.push('/workspace')

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
        if (response) {
         let us = await this.$axios.get('/api/account/username')
        await this.$auth.setUser(us.data
          
        )
      }
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>

<style>
</style>
