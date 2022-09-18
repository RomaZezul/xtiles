<template>
  <div
    :id="blockId"
    :style="{
      left: X,
      top: Y,
      width: W,
      height: H,
      background: this.col,
    }"
    @mousedown.stop="mousedown()"
    class="block_container-root"
  >
    <MainPageContentBlockHeader :title="title" :id="id" />
    <div class="block_container-elements">
      <MainPageContentBlockElement
        v-for="element in listElements"
        :key="element.id"
        :element="element"
        :id="element.id"
        :blockId="id"
      />
    </div>

    <div class="create_element" @click="createElement()">Create</div>
  </div>
</template>
<script>
export default {
  mounted() {
    const resizeObserver = new ResizeObserver(this.resize);
    resizeObserver.observe(document.getElementById("page_content"));
    this.entries = document.getElementById(this.blockId);
    this.col = this.styleCol;
    //console.log(this.style);
  },
  props: ["x", "y", "w", "h", "title", "id", "listElements", "styleCol"],
  data() {
    return {
      show: false,
      blockId: this.id + "b",
      entries: null,
      col: "#ffffffff",
    };
  },
  methods: {
    resize() {
      this.entries.style.height = null;
      if (
        this.entries == null ||
        this.h > Math.trunc(this.entries.clientHeight / 24) * 24
      ) {
        this.entries.style.height = this.H;
        return;
      }
      this.entries.style.height =
        Math.trunc(this.entries.clientHeight / 24) * 24 + 24 + "px";
    },

    mousedown() {
      //var c = document.getElementById(this.blockId).getBoundingClientRect();
      this.$store.commit("block/SET_CURENT_BLOCK", { id: this.id });
    },
    async createElement() {
      this.show = true;
      this.$store.dispatch("element/CREATE_ELEMENT");
      this.resize();
    },
  },
  watch: {
    colS: function (s) {
      this.col = s;
      if (this.id == this.$store.state.block.CurrentBlock.id) {
        this.$store.dispatch("block/SET_STYLE");
        //console.log(this.blockId);
        //console.log(this.$store.state.block.CurrentBlock.id);
      }
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
    
    colS() {
      if (
        this.id == this.$store.state.block.CurrentBlock.id &&
        this.$store.state.block.isStyle
      ) {
        var w = this.$store.state.block.col;

        this.$store.commit("block/SET_IS_STYLE", false);
        return w;
      } else return this.col;
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
  //display: flex;
  //flex-direction: column;
  cursor: text;
}
.block_container-elements {
  margin-top: 5px;
  //overflow-x: hidden;
  //overflow-y: auto;
}
.create_element {
  width: 100%;
  height: 30px;
  opacity: 0;
  //border: 1px solid $grey2;
  //border-radius: 5px;
  //background: $grey5;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
}
</style>