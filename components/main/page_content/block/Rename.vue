<template>
  <input
    class="rename_block-root"
    :id="id + 'in'"
    autofocus
    type="text"
    v-model="titleBlock"
    @blur="rename"
  />
</template>
<script>
export default {
  props: ["id"],
  data() {
    return { inp: null, titleBlock: "" };
  },
  mounted() {
    this.inp = document.getElementById(this.id + "in");
    this.inp.focus();
    this.inp.addEventListener("keypress", this.key);
  },
  methods: {
    key(e) {
      if (e.keyCode === 13) {
        this.rename();
      }
      return;
    },
    rename() {
      this.$store.commit("block/SET_TITLE", this.titleBlock);
      this.$store.dispatch("block/RENAME_BLOCK");
      this.$store.commit("block/SET_IS_RENAME", false);
      this.$emit("titleBl", this.titleBlock);
    },
  },
};
</script>
<style lang="scss">
.rename_block-root {
  outline: none;
  border-style: none;
  width: stretch;
  text-align: center;
  background: transparent;
  font-size: $font_size-2;
  margin-top: -8px;
}
</style>