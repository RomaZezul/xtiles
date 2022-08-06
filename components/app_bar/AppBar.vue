<template>
  <div class="app_bar-root">
    <div class="app_bar-breadcrumbs">
      <span v-if="isPage">dfgh > yeter > jhgjhg > jfytfhfyh</span>
    </div>
    <div class="app_bar-buttons">
      <button class="app_bar-button"></button>

      <button class="app_bar-button"></button>

      <button class="app_bar-button"></button>

      <AppBarButtonsOpenProfile class="app_bar-button" />
    </div>
  </div>
</template>


<script>
export default {
  computed: {
    loggedIn() {
      return this.$auth.loggedIn;
    },
    user() {
      return this.$auth.user;
    },
    isPage() {
      return this.$store.state.isPage;
    },
  },

  methods: {},
};
</script>


<style lang="scss">
.app_bar-root {
  margin: 9px 40px 0 40px;
  padding-bottom: 7px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid $grey4;
}
.app_bar-breadcrumbs {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: flex-start;
  width: 60%;

  span {
    text-align: left;
    overflow-x: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-family: $font-fredoka;
    font-size: $font_size-1;
  }
}
.app_bar-buttons {
  display: flex;
}
.app_bar-button {
  margin-left: 13px;
}
</style>