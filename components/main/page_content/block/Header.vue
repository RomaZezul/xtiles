<template>
  <div class="block_header-root" @click="toolmenu($event)">
    {{ this.title }}
  </div>
</template>
<script>
export default {
  props: ["title"],
  methods: {
    toolmenu(e) {
      this.$store.commit("block/toolmenu/SET_SHOW_MODAL", true);
      var c = document.querySelector(".app").getBoundingClientRect();
      //var xBl = this.$store.state.block.CurrentBlock.x;
      var yBl = this.$store.state.block.CurrentBlock.yWin;
      //var wBl = this.$store.state.block.CurrentBlock.width;
      //var hBl = this.$store.state.block.CurrentBlock.height;
      var x = c.width - e.x > e.x ? e.x : e.x - 260;
      console.log(c);
      var y = c.height - yBl > yBl ? yBl + 25 : yBl - 61;
      this.$store.commit("block/toolmenu/SET_COORDS", {
        left: x + "px",
        top: y + "px",
      });
    },
  },
};
</script>
<style lang="scss">
.block_header-root {
  margin: -4px;
  padding: 4px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  width: 100%;
  height: 14px;
  cursor: pointer;
  &:hover {
    background: $grey4;
  }
}
</style>