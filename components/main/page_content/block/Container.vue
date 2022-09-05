<template>
  <div
    :id="blockId"
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

    <MainPageContentBlockElement
      class="block_container-elements"
      v-for="element in listElements"
      :key="element.id"
      :element="element"
      :id="element.id"
    />
    <MainPageContentBlockElementCreateElement v-if="show" />
    <div v-if="!show" class="create_element" @click="showInput()">
      Write here...
    </div>
  </div>
</template>
<script>
export default {
  props: ["x", "y", "w", "h", "title", "id", "listElements"],
  data() {
    return {
      show: false,
      blockId: this.id + 'b'
    };
  },
  methods: {
    mousedown() {
      var c = document.getElementById(this.blockId).getBoundingClientRect();
      this.$store.commit("block/SET_CURENT_BLOCK", {
        x: c.x,
        y: c.y,
        height: c.height,
        width: c.width,
        id: this.id,
        title: this.title,
      });
    },
    showInput() {
      this.show = true;
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
  display: flex;
  flex-direction: column;
  cursor: text;
}
.block_container-elements {
  margin-top: 5px;
}
.create_element {
  widows: 100%;
  height: 100%;
  margin-top: 5px;
  opacity: 0;
  &:hover {
    opacity: 1;
  }
}
</style>