<template>
  <div class="element_drag-root" @click="ShowMenu">
    <svg
      class="element-drag"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-item-drag-menu="true"
    >
      <g>
        <path
          d="M11.25 16.5C11.25 15.6716 10.5784 15 9.75 15C8.92157 15 8.25 15.6716 8.25 16.5C8.25 17.3284 8.92157 18 9.75 18C10.5784 18 11.25 17.3284 11.25 16.5Z"
          fill="currentColor"
        ></path>
        <path
          d="M11.25 12C11.25 11.1716 10.5784 10.5 9.75 10.5C8.92157 10.5 8.25 11.1716 8.25 12C8.25 12.8284 8.92157 13.5 9.75 13.5C10.5784 13.5 11.25 12.8284 11.25 12Z"
          fill="currentColor"
        ></path>
        <path
          d="M11.25 7.5C11.25 6.67157 10.5784 6 9.75 6C8.92157 6 8.25 6.67157 8.25 7.5C8.25 8.32843 8.92157 9 9.75 9C10.5784 9 11.25 8.32843 11.25 7.5Z"
          fill="currentColor"
        ></path>
        <path
          d="M15.75 16.5C15.75 15.6716 15.0784 15 14.25 15C13.4216 15 12.75 15.6716 12.75 16.5C12.75 17.3284 13.4216 18 14.25 18C15.0784 18 15.75 17.3284 15.75 16.5Z"
          fill="currentColor"
        ></path>
        <path
          d="M15.75 12C15.75 11.1716 15.0784 10.5 14.25 10.5C13.4216 10.5 12.75 11.1716 12.75 12C12.75 12.8284 13.4216 13.5 14.25 13.5C15.0784 13.5 15.75 12.8284 15.75 12Z"
          fill="currentColor"
        ></path>
        <path
          d="M15.75 7.5C15.75 6.67157 15.0784 6 14.25 6C13.4216 6 12.75 6.67157 12.75 7.5C12.75 8.32843 13.4216 9 14.25 9C15.0784 9 15.75 8.32843 15.75 7.5Z"
          fill="currentColor"
        ></path>
      </g>
    </svg>
  </div>
</template>
<script>
export default {
  mounted() {},
  props: ["id", "elementCur"],
  data() {
    return {
      new: true,
    };
  },
  methods: {
    ShowMenu() {
      this.$store.commit("element/SET_ID", this.id);
      this.$store.commit("element/SET_COORDS_MENU", {
        left: this.elementCur.getBoundingClientRect().x + 10,
        top: this.elementCur.getBoundingClientRect().y + 10,
      });
      this.$store.commit("element/SET_SHOW_MENU", true);
    },
  },
};
</script>
<style lang="scss">
.element_drag-root {
  margin: 0 -3px;
  opacity: 0;
  cursor: grab;
}
</style>