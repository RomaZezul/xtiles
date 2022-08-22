<template>
  <div
    :style="{
      left: X,
      top: Y,
      width: W,
      height: H,
    }"
    class="block_outline-root"
  >
    {{ WidthHightBlock.w }} x {{ WidthHightBlock.h }}
  </div>
</template>
<script>
export default {
  props: ["x", "y", "w", "h"],
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
    WidthHightBlock() {
      return { w: this.w / 2, h: this.h / 24 };
    },
  },
};
</script>
<style lang="scss">
.block_outline-root {
  position: absolute;
  border: 1px solid $grey4;
  border-radius: 10px;
  margin: -4px;
  padding: 3px;
  background: $blue1;
  opacity: 0.2;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: $font-fredoka;
  font-weight: 600;
  font-size: $font_size-2;
  color: $black1;
  &::selection {
    background: transparent;
  }
}
</style>