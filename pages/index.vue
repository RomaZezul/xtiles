<template>
  <div>
    <div>
    
      <div >
        <hr />
        <span class="link1" @click = 'reg(true)' > Sign In </span>
      </div>
      <span class="link1" @click = 'reg(false)'>
        Sign Up For Free
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  auth: false,
  methods: {
    reg(b){
this.$store.commit("SET_SHOW_F", b)
this.$router.push("/user")
    }
  },
};
</script>

<style lang="scss">


</style>
