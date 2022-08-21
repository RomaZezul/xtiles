<template >
  <button
    v-show="showMenu || isActive"
    :id="id"
    class="toolmenu-root"
    @click.stop="SETshowModal()"
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
  name: "ToolmenuWs",
  props: ["id", "name", "showMenu"],
  data() {
    return { show: false };
  },

  methods: {
    SETshowModal() {
      this.show = true;
      let elem = document.getElementById(this.id).getBoundingClientRect();
      this.$store.commit("workspace/toolmenu/SET_COORDS", {
        left: elem.x + 20,
        top: elem.y + 20,
      });
      this.$store.commit("workspace/toolmenu/SET_SHOW_MODAL", true);
      this.$store.commit("workspace/toolmenu/SET_WS", {
        name: this.name,
        id: this.id,
      });
    },
  },
  computed: {
    isActive() {
      if (!this.$store.state.workspace.toolmenu.showModal)
        return (this.show = false);
      if (this.$store.state.workspace.toolmenu.showModal) return this.show;
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
  &:hover {
    background: $pink2;
    color: $grey2;
  }
}
</style>