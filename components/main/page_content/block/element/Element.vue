<template>
  <div class="element-root">
    <div :id="elementId"></div>
  </div>
</template>
<script>
export default {
  mounted() {
    //window.addEventListener('resize', this.resize);

    var toolbarOptions = [
      ["bold", "italic", "underline", "strike"], // toggled buttons
      ["blockquote", "code-block", "link", "image", "video"],

      [{ header: 1 }, { header: 2 }], // custom button values
      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }], // superscript/subscript
      [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
      [{ direction: "rtl" }], // text direction

      [{ size: ["small", false, "large", "huge"] }], // custom dropdown
      [{ header: [1, 2, 3, 4, 5, 6, false] }],

      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ font: [] }],
      [{ align: [] }],

      ["clean"], // remove formatting button
    ];
    var options = {
      bounds: ".page_points-root",
      placeholder: "Write here...",
      theme: "bubble",
      modules: {
        toolbar: toolbarOptions,
      },
    };
    document.getElementById(this.elementId).innerHTML =
      this.element.contentHtml;

    var quill = new Quill("#" + this.elementId, options);
    quill.on("text-change", this.update);
    quill.focus();
  },
  props: ["id", "element", "blockId"],
  data() {
    return {
      elementId: "e" + this.id + "e",
    };
  },
  methods: {
    async update() {
      var txt = document.getElementById(this.elementId);
      var notes = null;
      for (var i = 0; i < txt.childNodes.length; i++) {
        if (txt.childNodes[i].className == "ql-editor") {
          notes = txt.childNodes[i];
          break;
        }
      }
      if (notes) {
        this.$axios.put("/api/elements/" + this.id, {
          contentHtml: notes.innerHTML,
          blockId: this.$store.state.block.CurrentBlock.id,
        });
      }

      let entries = document.getElementById(this.blockId);
      entries.style.height = null;
      if (
        entries == null ||
        this.$store.state.block.CurrentBlock.height >
          Math.trunc(entries.clientHeight / 24) * 24
      ) {
        entries.style.height = `${this.$store.state.block.CurrentBlock.height}px`;
        return;
      }
      entries.style.height = Math.trunc(entries.clientHeight / 24) * 24 + "px";
      // if (h != c.style.height) {
      //   this.$store.commit(
      //     "block/SET_CURENT_BLOCK_height",
      //     Math.trunc(c.clientHeight / 24) * 24
      //   );
      //   this.$store.dispatch("block/UPDATE");
      // }
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
  p::selection {
    background: $grey4;
  }
}
.ql-editor {
  padding: 0;
}
.ql-tooltip {
  z-index: 1;
}
</style>