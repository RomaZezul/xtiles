<template>
  <div class="createWS">
      Workspace
      <button id="show-modal" @click="SETshowModal(true)">+</button>
    </div>
</template>
   

<script>
export default {

  methods: {
    SETshowModal(b) {
      this.$store.commit('modal/SETshowModal', b);
    },
  },
}
</script>
<style>
.createWS{
  margin: 30px;
}
</style>