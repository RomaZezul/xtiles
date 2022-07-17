<template>
  <div class="profile-root">
    <button @click="SETshowModal(true)">{{ user.userName }}</button>
  </div>
</template>
   

<script>
export default {
  methods: {
    SETshowModal(b) {
      this.$store.commit("profile/SET_SHOW_MODAL", b);
    },
  },
  computed: {
    user(){
      return this.$auth.user;
    }
  },
};
</script>
<style>
.profile-root {
  width: 100%;
  height: 100%;
}
</style>