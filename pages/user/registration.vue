<template>
  <div>
    <form @submit.prevent="userRegister">
      <div>
        <h1>Для регистрации укажите имя пользователя и пароль</h1>
        <label for="inputUsername">Имя пользователя</label>
        <input
          id="inputUsername"
          placeholder="Имя пользователя"
          required=""
          v-model="register.userName"
        />
      </div>
      <div>
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="email"
          required=""
          v-model="register.email"
        />
      </div>
      <div>
        <label for="Password">Пароль</label>
        <input
          type="password"
          id="Password"
          placeholder="Пароль"
          required=""
          v-model="register.password"
        />
        <button type="submit">Регистрация</button>
      </div>
      <div>
        <hr>
        <NuxtLink tag="button" to="/user/login" exact> Sign In </NuxtLink>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      register: {
        userName: '',
        email: '',
        password: '',
      },
    }
  },

  auth: false,

  methods: {
    async userRegister() {
      try {
        let response = await this.$axios.post('/api/registration', {
          userName: this.register.userName,
          email: this.register.email,
          password: this.register.password,
        })
        console.log(response)
        await this.$auth.loginWith('local', {
          data: {
            email: this.register.email,
            password: this.register.password,
          },
        })
        this.$router.push('/workspace')
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>
<style></style>
