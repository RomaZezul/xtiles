<template>
  <button class="profile-root" @click="SETshowModal(true)">{{ user }}</button>
</template>
   

<script>
export default {
  methods: {
    SETshowModal(b) {
      this.$store.commit("profile/SET_SHOW_MODAL", b);
    },
  },

  computed: {
    user() {
      if (this.$auth.user.userName) return this.$auth.user.userName[0];
    },
  },
};
</script>
<style lang="scss">
.profile-root {
  width: 28px;
  height: 28px;
  border-radius: 14px;
  background: $gradient-1;
  border-style: none;
  color: $white;
}
</style>