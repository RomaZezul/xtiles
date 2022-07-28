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
  display: flex;
  align-content: flex-start;
  flex-direction: column;
  border-style: none;
  background: $white;
  margin: $size-10;
}
.page_miniature-1 {
  display: flex;
  align-items: center;
  justify-content: center;
  width: $size-6;
  height: $size-7;
  background: $gradient-1;
  border-radius: $radius-3;
}
.page_miniature-2 {
  width: $size-8;
  height: $size-9;
  background: $grey5;
  border-radius: $radius-4;
}
</style>