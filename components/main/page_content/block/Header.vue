<template>
  <div
    class="block_header-root"
    @mousedown="mousedown($event)"
  >
    {{ this.title }}
  </div>
</template>
<script>
export default {
  props: ["title", "blockId"],
  data() {
    return {
      x: 0,
      y: 0,
      w: 0,
      h: 0,
      lEl: 0,
      tEl: 0,
      wEl: 0,
      hEl: 0,
      xSt: 0,
      ySt: 0,
      show: false,
      down: false,

      block: null,
      container: null,
      deltaX: 0,
      deltaY: 0,
    };
  },
  mounted() {
    this.container = document.querySelector(".page_points-root");
    this.block = document.getElementById(this.blockId);

    this.container.addEventListener("mousemove", this.mousemove);
    this.container.addEventListener("mouseup", this.mouseup);
  },
  methods: {
    mousedown(e) {
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
        this.block.style.left = `${
          e.pageX - this.deltaX - this.container.getBoundingClientRect().left
        }px`;
        // `${Math.round((e.pageX - this.lEl - widthP / 2) / widthP) * 2 + 1}%`;
        this.block.style.top = `${
          e.pageY - this.deltaY - this.container.getBoundingClientRect().top
        }px`;
        // `${Math.round((e.pageY - this.tEl - 12) / 24) * 24 + 12}px`;
      }
    },
    mouseup(e) {
      this.down = false;
      this.toolmenu(e);
    },
    toolmenu(e) {
      if (this.show) {
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
        this.show = false;
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
  height: 14px;
  line-height: 14px;
  font-weight: 500;
  font-size: $font_size-1;
  text-align: center;
  cursor: pointer;

  //content-visibility: hidden;
  &:hover {
    background: #a2a3b73d;
    color: #0a0277;
    //height: 14px;
    //content-visibility: visible;
  }
}
</style>