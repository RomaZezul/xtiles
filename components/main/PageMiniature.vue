<template>
  <button class="page_miniature-root" @click="route()">
    <div class="page_miniature-1">
      <div class="page_miniature-2"></div>
    </div>
    <div class="page_miniature-name">{{ name }}</div>
    <div class="page_miniature-date">{{ date }}</div>
  </button>
</template>

<script>
export default {
  name: "PageMiniature",
  props: ["name", "date", "id"],
  methods: {
    route() {
      this.$store.commit("pagge/SET_CURENT_PAGE", {
        name: this.name,
        id: this.id,
      });

      this.$router.push("/page");
    },
  },
};
</script>

<style lang="scss">
.page_miniature-root {
  border-style: none;
  background: #ffffff;
  margin: 0;
  padding: 0;
  text-align: left;
  &:hover {
    .page_miniature-1 {
      background: $pink1;
    }
  }
  &:active {
    .page_miniature-1 {
      background: $gradient-1;
    }
    .page_miniature-2 {
      opacity: $opasity_hov;
    }
  }
}
.page_miniature-1 {
  height: $size-7;
  background: $gradient-1;
  border-radius: $radius-3;
  align-items: center;
  justify-content: center;
  padding: 4px;
}
.page_miniature-2 {
  background: $grey5;
  border-radius: $radius-4;
  height: inherit;
}
</style>