<template>
  <div>
    <button id="show-modal" @click="SETshowModal(true)">
      Create Workspace
    </button>
  </div>
</template>
   


<script>
export default {
  methods: {
    SETshowModal(b) {
      this.$store.commit("workspace/SET_SHOW_MODAL", b);
    },
  },
};
</script>