<template>
  <div class="header-root">
    <HeadersHeaderWsRow1 />
    <HeadersHeaderWsRow2 />
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


<style>
.header-root {
  display: flex;
  flex: 1 1;
  border-bottom: 1px solid black;
  justify-content: flex-end;
}
</style>