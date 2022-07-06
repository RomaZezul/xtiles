<template>
  <div>
    <div>
      <div>
        <hr />
        <NuxtLink tag="button" to="/user/login" exact> Sign In </NuxtLink>
      </div>
      <NuxtLink tag="button" to="/user/registration" exact>
        Sign Up For Free
      </NuxtLink>

    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  auth: false,
  methods: {
  },
}
</script>

<style>
</style>
