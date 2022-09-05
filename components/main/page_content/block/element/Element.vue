<template>
  <span
    :id="elementId"
    @blur="update()"
    class="element-root"
    contentEditable="true"
  >
  </span>
</template>
<script>
export default {
  mounted() {
    document.getElementById(this.elementId).innerHTML =
      this.element.contentHtml;
  },
  props: ["id", "element"],
  data() {
    return {
      elementId: this.id + "e",
    };
  },
  methods: {
    async update() {
      var txt = document.getElementById(this.elementId).innerHTML;

      let respons = await this.$axios.put("/api/elements/" + this.id, {
        contentHtml: txt,
        blockId: this.$store.state.block.CurrentBlock.id,
      });
    },
  },
};
</script>
<style lang="scss">
.element-root {
  width: stretch;
  word-break: break-all;
  cursor: text;
  &::selection {
    background: $grey4;
  }
  div::selection {
    background: $grey4;
  }
}
</style>