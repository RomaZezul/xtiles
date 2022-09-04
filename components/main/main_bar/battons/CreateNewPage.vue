<template>
  <button class="create_new_page-root" @click="CreatePage">
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="6.58826" y="3.29413" width="0.823529" height="7.41176" />
      <rect
        x="10.7058"
        y="6.58823"
        width="0.82353"
        height="7.41176"
        transform="rotate(90 10.7058 6.58823)"
      />
      <circle cx="7" cy="7" r="6.5" />
    </svg>
    <span>Create new page</span>
  </button>
</template>
<script>
export default {
  methods: {
    CreatePage() {
      this.$store.commit("pagge/SET_CURENT_PAGE", {
        name: "Untitled",
        id: 0,
      });
      this.$router.push("/page");
    },
  },
};
</script>
<style lang="scss">
.create_new_page-root {
  width: 176px;
  height: 32px;
  background: $gradient-1;
  border-radius: 8px;
  border-style: none;
  margin-left: $size-4;
  display: flex;
  justify-content: space-around;
  align-items: center;
  svg {
    rect {
      fill: $white;
    }
    circle {
      stroke: $white;
    }
  }
  span {
    font-size: $font_size-1;
    
    font-weight: 400;
    color: $white;
  }
}
.create_new_page-root:hover {
    opacity: $opasity_hov
}
</style>