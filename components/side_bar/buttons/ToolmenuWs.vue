<template >
  <button
    id="toolmenu-root-id"
    class="toolmenu-root"
    @click.stop="SETshowModal(true, $event)"
  >
    <svg
      width="3"
      height="13"
      viewBox="0 0 3 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="1.1" cy="1.9335" r="1.1" fill="#1A1A1C" />
      <circle cx="1.1" cy="6.50845" r="1.1" fill="#1A1A1C" />
      <circle cx="1.1" cy="11.0835" r="1.1" fill="#1A1A1C" />
    </svg>
  </button>
</template>
<script>
export default {
  props: ["id", "name"],
  data() {
    return {
      coords: 0,
    };
  },

  methods: {
    SETshowModal(b, e) {
      this.$store.commit("workspace/toolmenu/SET_SHOW_MODAL", b);
      //let elem = document.getElementById("toolmenu-root-id");
      //this.coords = elem.getBoundingClientRect();
      console.log(e);
      this.coords = {x: e.pageX, y: e.pageY}
      this.$store.commit("workspace/toolmenu/SET_COORDS", {
        left: this.coords.x,
        top: this.coords.y,
      });
    },
  },
};
</script>
<style lang="scss">
.toolmenu-root {
  width: 20px;
  height: 20px;
  border-style: none;
  border-radius: 10px;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
}
.toolmenu-root:hover {
  background: $pink2;
  color: $grey2;
}
</style>