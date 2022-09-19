<template>
  <div class="element-root">
    <MainPageContentBlockElementDrag :id="id" :elementCur="this.elementCur" />
    <div class="element-edit" :style="{ background: this.col }">
      <div :id="elementId" @click="showEditorOnClick"></div>
    </div>
  </div>
</template>
<script>
export default {
  beforeMount() {},
  mounted() {
    this.elementCur = document.getElementById(this.elementId);
    this.entries = document.getElementById(this.blockId + "b");
    this.col = this.colSTORE;
    var toolbarOptions = [
      ["bold", "italic", "underline", "strike"], // toggled buttons
      ["blockquote", "code-block", "link", "image", "video"],

      [{ header: 1 }, { header: 2 }], // custom button values
      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }], // superscript/subscript
      [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
      [{ direction: "rtl" }], // text direction

      [{ size: [] }], // custom dropdown
      [{ header: [1, 2, 3, 4, 5, 6, false] }],

      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ font: [] }],
      [{ align: [] }],

      ["clean"], // remove formatting button
    ];
    var options = {
      bounds: ".page_points-root",
      //placeholder: "Write here...",
      theme: "bubble",
      modules: {
        toolbar: toolbarOptions,
      },
    };
    this.elementCur.style.width = "100%";

    this.col = this.element.contentHtml.substr(0, 9);

    this.elementCur.innerHTML = this.element.contentHtml.slice(9);
    //this.elementCur.style.background = this.$store.state.element.col;

    var quill = new Quill(this.elementCur, options);
    quill.on("text-change", this.update);
    quill.focus();

    this.resize();
  },
  props: ["id", "element", "blockId"],
  data() {
    return {
      elementId: "e" + this.id + "e",
      elementCur: null,
      entries: null,
      col: "#ffffff00",
    };
  },
  watch: {
    colS: function (s) {
      this.col = s;
      if (this.blockId == this.$store.state.block.CurrentBlock.id) {
        //console.log(this.blockId)
        //console.log(this.$store.state.block.CurrentBlock.id)

        this.update();
      }
    },
  },
  computed: {
    colS() {
      if (
        this.id == this.$store.state.element.id &&
        this.$store.state.element.isStyle
      ) {
        var w = this.$store.state.element.col;

        this.$store.commit("element/SET_IS_STYLE", false);
        return w;
      } else return this.col;
    },
  },
  methods: {
    SearchNode(selector) {
      var notes = null;
      for (var i = 0; i < this.elementCur.childNodes.length; i++) {
        if (this.elementCur.childNodes[i].className.indexOf(selector) >= 0) {
          notes = this.elementCur.childNodes[i];
          break;
        }
      }
      return notes;
    },
    showEditorOnClick() {
      var notes = this.SearchNode("ql-hidden");
      if (notes) {
        notes.classList.remove("ql-hidden");
      }
    },
    async update() {
      var notes = this.SearchNode("ql-editor");
      //console.log(notes.innerHTML);
      if (notes) {
        this.$store.commit("element/SET_ID", this.id);
        this.$store.dispatch(
          "element/UPDATE_ELEMENT",
          this.col + "" + notes.innerHTML
        );
      }
      this.resize();
    },
    resize() {
      this.entries.style.height = null;
      if (
        this.entries == null ||
        this.$store.state.block.CurrentBlock.height >
          Math.trunc(this.entries.clientHeight / 24) * 24
      ) {
        this.entries.style.height = `${this.$store.state.block.CurrentBlock.height}px`;
        return;
      }
      this.entries.style.height =
        Math.trunc(this.entries.clientHeight / 24) * 24 + 24 + "px";
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
  display: flex;
  align-items: flex-start;
  .element-edit {
    width: stretch;
    word-break: break-all;
    margin: 5px 0;
    margin-right: 18px;
    cursor: text;
    border-radius: 10px;
  }
  &::selection {
    background: $grey4;
  }
  p::selection {
    background: $grey4;
  }
  &:hover {
    .element_drag-root {
      opacity: 1;
    }
  }
}

.ql-editor {
  padding: 5px;
  img {
    border-radius: 10px;
  }
}
.ql-tooltip {
  z-index: 1000;
}
</style>