<template>
  <button class="open_profile-root" @click="SETshowModal(true)">
  <span>{{ user }}</span></button>
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
      if (this.$auth.user.userName) return (this.$auth.user.userName[0]).toUpperCase();
    },
  },
};
</script>
<style lang="scss">
.open_profile-root {
  width: 28px;
  height: 28px;
  border-radius: 14px;
  background: $gradient-1;
  border-style: none;
  color: $white;
  display: flex;
  align-items: center;
  justify-content: center;
}
.open_profile-root:hover{
      opacity: $opasity_hov
}
</style>