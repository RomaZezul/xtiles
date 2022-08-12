<template>
  <div
    class="page_points-root"
    :style="{height: pagePointsHeight}"
    @mousedown.stop="mousedown($event)"
    @mousemove.stop="mousemove($event)"
    @mouseup.stop="mouseup($event)"
    @mouseleave="mouseleave()"
  >
    <MainPageContentBlockContainer
      v-for="block in blocks"
      :key="block.id"
      :title="block.title"
      :x="block.x"
      :y="block.y"
      :w="block.width"
      :h="block.height"
      :id="block.id"
    />
    <MainPageContentBlockOutline
      v-if="Show"
      :x="this.x"
      :y="this.y"
      :w="this.w"
      :h="this.h"
    />
  </div>
</template>
<script>
export default {
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
    };
  },
  methods: {
    mousedown(e) {
      var c = document
        .querySelector(".page_points-root")
        .getBoundingClientRect();
      this.tEl = c.top;
      this.lEl = c.left;
      this.wEl = c.width;
      this.hEl = c.height;


      
      var widthP = this.wEl / 50;
      this.x = Math.round((e.pageX - this.lEl - widthP / 2) / widthP) * 2 + 1;
      this.y = Math.round((e.pageY - this.tEl - 12) / 24) * 24 + 12;

      this.xSt = e.pageX;
      this.ySt = e.pageY;
      this.show = false;
      if (this.x + 12 < 100) this.down = true;
    },
    mousemove(e) {
      var widthP = this.wEl / 50;
      if (this.down) {
        this.show = true;
        this.w = 12; //%
        this.h = 24; //px
      }
      if (e.pageX - this.xSt > 6 * widthP && this.down) {
        this.w = Math.trunc((e.pageX - this.xSt) / widthP) * 2;
        this.show = true;
      }
      if (e.pageY - this.ySt > 24 && this.down) {
        this.h = Math.trunc((e.pageY - this.ySt) / 24) * 24;
        this.show = true;
      }
    },
    mouseup(e) {
      if (this.show) {
        this.$store.dispatch("block/CREATE_BLOCK", {
          x: this.x,
          y: this.y,
          height: this.h,
          width: this.w,
        });
      }
      this.show = false;
      this.down = false;
    },
    mouseleave() {
      this.show = false;
      this.down = false;
    },
  },
  computed: {
    Show() {
      return this.show;
    },
    blocks() {
      return this.$store.state.block.blocks;
    },
    pagePointsHeight(){
        return this.$store.state.block.pagePointsHeight + 'px'
    }
  },
};
</script>
<style lang="scss">
.page_points-root {
  position: relative;
  background: url("data:image/svg+xml,%3Csvg viewBox='0 -50 1 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle r='8px' fill='%23D2DCF5'/%3E%3C/svg%3E%0A")
    top left/ 2% 24px;
  cursor: crosshair;
}
</style>