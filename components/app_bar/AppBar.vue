<template>
  <div class="app_bar-root">
    <div class="app_bar-breadcrumbs">gdfgfd>dfgh>yeter</div>
    <div class="app_bar-buttons">
      <button class="app_bar-button">
      </button>

      <button class="app_bar-button">
      </button>

      <button class="app_bar-button">
      </button>


        <AppBarButtonsOpenProfile class="app_bar-button"/>
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
.app_bar-buttons{
  display: flex;
}
.app_bar-button{
  margin-left: 13px;
}
</style>