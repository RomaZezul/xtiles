<template>
  <div class="createWS">
    Workspace
    <button id="show-modal" @click="SETshowModal(true)">+</button>
  </div>
</template>
   

<script>
export default {
  name: "CreateWS",
  methods: {
    SETshowModal(b) {
      this.$store.commit("workspace/SET_SHOW_MODAL", b);
    },
  },
};
</script>
<style>
.createWS {
  margin: 30px;
}
</style>