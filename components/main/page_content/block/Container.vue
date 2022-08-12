<template>
  <div
    :id="id"
    :style="{
      left: X,
      top: Y,
      width: W,
      height: H,
    }"
    @mousedown.stop="mousedown()"
    class="block_container-root"
  >
    <MainPageContentBlockHeader :title="title" />
  </div>
</template>
<script>
export default {
  props: ["x", "y", "w", "h", "title", "id"],
  methods: {
    mousedown() {
      var c = document.getElementById(this.id).getBoundingClientRect();
      this.$store.commit("block/SET_CURENT_BLOCK", {
        x: c.x,
        y: c.y,
        height: c.height,
        width: c.width,
        id: this.id,
        title: this.title
      });
    },
  },
  computed: {
    X() {
      return this.x + "%";
    },
    Y() {
      return this.y + "px";
    },
    W() {
      return this.w + "%";
    },
    H() {
      return this.h + "px";
    },
  },
};
</script>
<style lang="scss">
.block_container-root {
  position: absolute;
  border: 1px solid $grey4;
  border-radius: 10px;
  margin: -4px;
  padding: 3px;
  background: $white;
}
</style>