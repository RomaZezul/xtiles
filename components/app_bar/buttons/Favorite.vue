<template>
  <div class="favorite_btn-root" @click="SETshowModal()">
    <svg
      width="14"
      height="14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.56426 1.15213C6.75544 0.812431 7.24456 0.812431 7.43574 1.15213L8.77333 3.52889C8.99716 3.92661 9.38987 4.2008 9.84036 4.27387L12.5564 4.71444C12.9629 4.78038 13.1199 5.28195 12.8235 5.56786L10.982 7.34419C10.6314 7.68237 10.4668 8.16974 10.5407 8.65122L10.9261 11.1634C10.9865 11.5573 10.5844 11.8601 10.2225 11.6933L7.62795 10.4973C7.22947 10.3136 6.77053 10.3136 6.37205 10.4973L3.77748 11.6933C3.4156 11.8601 3.01352 11.5573 3.07394 11.1634L3.45931 8.65122C3.53317 8.16974 3.36862 7.68237 3.01803 7.34419L1.17652 5.56786C0.880122 5.28195 1.03708 4.78038 1.44359 4.71444L4.15964 4.27387C4.61013 4.2008 5.00284 3.92661 5.22667 3.52889L6.56426 1.15213Z"
      />
    </svg>
  </div>
</template>
<script>
export default {
  methods: {
    SETshowModal() {
      this.$store.commit("favorite/SET_SHOW_MODAL", true);
    },
  },
};
</script>
<style lang="scss">
.favorite_btn-root {
  height: 24px;
  width: 24px;
  background: $pink1;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    path {
      stroke: $white;
    }
  }
  &:hover {
    opacity: $opasity_hov;
  }
}
</style>