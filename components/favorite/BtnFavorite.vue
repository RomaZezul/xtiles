<template>
  <div class="btn_favorite-root" @click="roteToFavoritePage">
    <div>
      {{ name }}
    </div>
    <svg
      @click.stop="delFavoritePage"
      id="x"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 4L4 12"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="currentColor"
      ></path>
      <path
        d="M4 4L12 12"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="currentColor"
      ></path>
    </svg>
  </div>
</template>
<script>
export default {
  props: ["id", "name"],
  methods: {
    delFavoritePage() {
      this.$store.dispatch("favorite/REMOVE_FAVORITE", this.id);
    },
    roteToFavoritePage() {
      this.$store.commit("pagge/SET_CURENT_PAGE", {
        name: this.name,
        id: this.id,
      });
      this.$store.dispatch("pagge/GET_PAGE");
      this.$router.push("/page");
      this.$store.commit("favorite/SET_SHOW_MODAL", false);
    },
  },
};
</script>
<style lang="scss">
.btn_favorite-root {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 24px;
  border-radius: 8px;
  padding: 5px;
  margin: 2px 0;
  #x {
    display: none;
  }
  &:hover {
    background: $grey5;
    #x {
      display: block;
    }
  }
}
</style>