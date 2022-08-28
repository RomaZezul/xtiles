<template>
  <button class="create_ws-root" @click="SETshowModal()">
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
    <span>Create new workspace</span>
  </button>
</template>
   

<script>
export default {
  methods: {
    SETshowModal() {
      this.$store.commit("workspace/SET_SHOW_MODAL", true);
    },
  },
};
</script>
<style lang="scss">
.create_ws-root {
  position: relative;
  width: 193px;
  min-height: 34px;
margin: 18px auto;
  background: $gradient-1;
  border-radius: 8px;
  border-style: none;
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
    font-family: $font-fredoka;
    font-weight: 400;
    color: $white;
  }
}
.create_ws-root:hover {
       opacity: $opasity_hov

}
</style>
