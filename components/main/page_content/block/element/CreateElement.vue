<template>
  <div class="create_element-root">
    <div id="new">w</div>
  </div>
</template>
<script>
export default {
  mounted() {
    var toolbarOptions = [["link", "image", "video"]];
    var options = {
      bounds: ".page_points-root",
      placeholder: "Write here...",
      theme: "bubble",
      modules: {
        toolbar: toolbarOptions,
      },
    };

    var quill = new Quill('#new', options);
    quill.on("editor-change", this.create);

    quill.setSelection(0, 1, "user");
  },
  data() {
    return {
      new: true,
    };
  },
  methods: {
    async create() {
      var txt = document.getElementById('new');
      console.log(txt)
      var notes = null;
      for (var i = 0; i < txt.childNodes.length; i++) {
        if (txt.childNodes[i].className == "ql-editor") {
          notes = txt.childNodes[i];
          break;
        }
      }
      if (notes && this.new) {
        this.$axios.post("/api/elements/", {
          contentHtml: notes.innerHTML,
          blockId: this.$store.state.block.CurrentBlock.id,
        });
        this.new = false;
      }
      this.$store.dispatch("pagge/GET_PAGE");
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