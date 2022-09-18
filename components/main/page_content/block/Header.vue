<template>
  <div class="block_header-root" @mousedown="mousedown($event)">
    <div v-if="!isRename">{{ this.titleBlock }}</div>
    <MainPageContentBlockRename @titleBl="setTitle" :id="id" v-if="isRename" />
  </div>
</template>
<script>
export default {
  props: ["title", "id"],
  data() {
    return {
      titleBlock: "",
      // x: 0,
      // y: 0,
      // w: 0,
      // h: 0,
      // lEl: 0,
      // tEl: 0,
      // wEl: 0,
      // hEl: 0,
      // xSt: 0,
      // ySt: 0,
      show: false,
      down: false,

      block: null,
      container: null,
      deltaX: 0,
      deltaY: 0,
      blockTopComp: 0,
      blockLeftComp: 0,
      blockWidthComp: 0,
    };
  },
  mounted() {
    this.titleBlock = this.title;
    this.container = document.querySelector(".page_points-root");
    this.block = document.getElementById(this.id + "b");
    this.blockWidthComp = this.block.getBoundingClientRect().width;
    this.container.addEventListener("mousemove", this.mousemove);
    this.container.addEventListener("mouseup", this.mouseup);
    this.container.addEventListener("mouseleave", this.mouseleave);
    this.wEl = this.container.getBoundingClientRect().width;
    this.lEl = this.container.getBoundingClientRect().left;
  },
  methods: {
    setTitle(t) {
      this.titleBlock = t;
    },
    mousedown(e) {
      this.$store.commit("block/SET_CURENT_BLOCK", { id: this.id });
      this.block.style.zIndex = 10;
      this.deltaX = e.pageX - this.block.getBoundingClientRect().left;
      this.deltaY = e.pageY - this.block.getBoundingClientRect().top;
      //console.log(this.deltaX);

      // this.tEl = c.top;
      // this.lEl = c.left;
      // this.wEl = c.width;
      // this.hEl = c.height;
      // this.xSt = e.pageX;
      // this.ySt = e.pageY;
      this.down = true;
      this.show = true;
    },
    mousemove(e) {
      if (this.down && this.block.style) {
        this.show = false;
        var widthP = this.wEl / 50;
        //this.x = Math.round((e.pageX - this.lEl - widthP / 2) / widthP) * 2 + 1;
        //this.y = Math.round((e.pageY - this.tEl - 12) / 24) * 24 + 12;
        this.blockLeftComp =
          e.pageX - this.deltaX - this.container.getBoundingClientRect().left;
        this.block.style.left = `${this.blockLeftComp}px`;
        // `${Math.round((e.pageX - this.lEl - widthP / 2) / widthP) * 2 + 1}%`;
        this.blockTopComp =
          e.pageY - this.deltaY - this.container.getBoundingClientRect().top;
        this.block.style.top = `${this.blockTopComp}px`;
        // `${Math.round((e.pageY - this.tEl - 12) / 24) * 24 + 12}px`;
      }
    },
    mouseup(e) {
      if (!this.show && this.down) {
        var widthP = this.wEl / 50;
        var isPositionX = false;
        var isPositionY = false;
        var blockLeftComp =
          Math.round((this.blockLeftComp - widthP / 2) / widthP) * 2 + 1;
        var blockTopComp = Math.round((this.blockTopComp - 12) / 24) * 24 + 12;
        if (
          blockLeftComp > 0 &&
          blockLeftComp + Math.round(this.blockWidthComp / widthP) * 2 < 100
        ) {
          isPositionX = true;
        } else {
          isPositionX = false;
        }

        if (blockTopComp > 0) {
          isPositionY = true;
        } else {
          isPositionY = false;
        }
        if (isPositionX && isPositionY) {
          this.block.style.left = `${blockLeftComp}%`;
          this.block.style.top = `${blockTopComp}px`;
          this.$store.commit("block/SET_CURENT_BLOCK_position", {
            x: blockLeftComp,
            y: blockTopComp,
          });
          this.$store.dispatch("block/UPDATE");
        } else {
          this.block.style.left = `${this.$store.state.block.CurrentBlock.x}%`;
          this.block.style.top = `${this.$store.state.block.CurrentBlock.y}px`;
        }
      }  this.block.style.zIndex = 'auto';

      this.toolmenu(e);
      this.down = false;
    },
    mouseleave() {
      if (this.down) {
        this.block.style.left = `${this.$store.state.block.CurrentBlock.x}%`;
      }
      this.down = false;
    },

    toolmenu(e) {
      if (this.show) {
        if (!this.$store.state.block.isRename) {
          var c = document.querySelector(".app").getBoundingClientRect();
          //var xBl = this.$store.state.block.CurrentBlock.x;
          var yBl = this.block.getBoundingClientRect().y;
          //var wBl = this.$store.state.block.CurrentBlock.width;
          //var hBl = this.$store.state.block.CurrentBlock.height;
          var x = c.width - e.x > e.x ? e.x : e.x - 260;
          var y = c.height - yBl > yBl ? yBl + 25 : yBl - 61;
          this.$store.commit("block/toolmenu/SET_COORDS", {
            left: x + "px",
            top: y + "px",
          });
          this.$store.commit("block/toolmenu/SET_SHOW_MODAL", true);
        }
        this.show = false;
      }
    },
  },
  computed: {
    isRename() {
      if (this.id == this.$store.state.block.CurrentBlock.id) {
        return this.$store.state.block.isRename;
      }
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
  //height: 14px;
  line-height: 18px;
  text-align: center;
  cursor: pointer;
  font-weight: 500;
  font-size: $font_size-1;
  min-height: 4px;

  //content-visibility: hidden;
  &:hover {
    background: #a2a3b73d;
    color: #0a0277;
    //height: 14px;
    //content-visibility: visible;
  }
}
</style>