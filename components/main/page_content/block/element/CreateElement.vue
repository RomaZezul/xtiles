<template>
  <div class="create_element-root">
    <textarea autofocus @blur="create()" type="text" v-model="elText">fgdsgwshdhfg
    </textarea>
  </div>
</template>
<script>
export default {
  data() {
    return {
      elText: "",
    };
  },
  methods: {
    async create() {
      let respons = await this.$axios.post("/api/elements", {
        contentHtml: this.elText,
        blockId: this.$store.state.block.CurrentBlock.id,
      });
    },
  },
};
</script>
<style lang="scss">
.create_element-root {
  textarea {
    width: stretch;
    word-break: break-all;
  }
}
</style>