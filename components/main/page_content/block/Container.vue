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
    <div class="block_container-elements">
      <MainPageContentBlockElement
        v-for="element in listElements"
        :key="element.id"
        :element="element"
        :id="element.id"
        :blockId="blockId"
      />
    </div>

    <div style="text-align: center">
      <div class="create_element" @click="createElement()">Create</div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    const resizeObserver = new ResizeObserver(this.resize);
    resizeObserver.observe(document.getElementById("page_content"));
  },
  props: ["x", "y", "w", "h", "title", "id", "listElements"],
  data() {
    return {
      show: false,
      blockId: this.id + "b",
    };
  },
  methods: {
    async resize() {
      var entries = document.getElementById(this.blockId);
      entries.style.height = null;
      if (
        entries == null ||
        //this.$store.state.block.CurrentBlock.height >
        this.h > Math.trunc(entries.clientHeight / 24) * 24
      ) {
        entries.style.height = this.H;
        return;
      }
      entries.style.height = Math.trunc(entries.clientHeight / 24) * 24 + "px";
      // await this.$axios.put("/api/Blocks/" + this.id, {
      //       x: this.x,
      //       y: this.y,
      //       height: Math.trunc(entries.clientHeight / 24) * 24,
      //       width: this.w
      //   });
    },

    mousedown() {
      var c = document.getElementById(this.blockId).getBoundingClientRect();
      this.$store.commit("block/SET_CURENT_BLOCK", { id: this.id, yWin: c.y });
    },
    async createElement() {
      this.show = true;
      var res = await this.$axios.post("/api/elements", {
        contentHtml: "<p></p>",
        blockId: this.$store.state.block.CurrentBlock.id,
      });
      this.$store.dispatch("pagge/GET_PAGE");
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
  //overflow-x: hidden;
  //overflow-y: auto;
}
.create_element {
  width: 100%;
  height: 20px;
  margin-top: 5px;
  opacity: 0;
  border: 1px solid $grey2;
  border-radius: 5px;
  background: $grey5;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
}
</style>