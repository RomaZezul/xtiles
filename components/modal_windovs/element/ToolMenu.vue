<template>
  <div
    @click.self="closeModal"
    class="toolmenu_modal_element-mask"
    v-if="GETshowModal"
  >
    <div
      class="toolmenu_modal_element-wrapper"
      :style="{ left: coords.left + 'px', top: coords.top + 'px' }"
    >
      <div class="toolmenu_modal_element-container">
        <div class="buttons_tool_style-element">
          <div id="Orange" @click="Orange"></div>
          <div id="Green" @click="Green"></div>
          <div id="Blue" @click="Blue"></div>
          <div id="Yellow" @click="Yellow"></div>
          <div id="Grey" @click="Grey"></div>
          <div id="White" @click="White"></div>
          <div id="None" @click="None"></div>
        </div>
        <div class="buttons_tool_menu-element" @click="deleteElement">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 4H3.33333H14"
              stroke="currentColor"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M5.33301 3.99967V2.66634C5.33301 2.31272 5.47348 1.97358 5.72353 1.72353C5.97358 1.47348 6.31272 1.33301 6.66634 1.33301H9.33301C9.68663 1.33301 10.0258 1.47348 10.2758 1.72353C10.5259 1.97358 10.6663 2.31272 10.6663 2.66634V3.99967M12.6663 3.99967V13.333C12.6663 13.6866 12.5259 14.0258 12.2758 14.2758C12.0258 14.5259 11.6866 14.6663 11.333 14.6663H4.66634C4.31272 14.6663 3.97358 14.5259 3.72353 14.2758C3.47348 14.0258 3.33301 13.6866 3.33301 13.333V3.99967H12.6663Z"
              stroke="currentColor"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M9.33301 7.33301V11.333"
              stroke="currentColor"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M6.66699 7.33301V11.333"
              stroke="currentColor"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          Delete
        </div>
      </div>
    </div>
  </div>
</template>
  
  
  <script>
export default {
  name: "ModalToolmenuElement",

  methods: {
    closeModal() {
      this.$store.commit("element/SET_SHOW_MENU", false);
    },
    deleteElement() {
      this.$store.dispatch("element/DELETE_ELEMENT");
      this.closeModal();
    },
    Orange() {
      this.$store.commit("element/SET_IS_STYLE", true);
      this.$store.commit("element/SET_COL", "#f3ceceff");
      this.closeModal();
    },
    Green() {
      this.$store.commit("element/SET_IS_STYLE", true);
      this.$store.commit("element/SET_COL", "#cbf4d6ff");
      this.closeModal();
    },
    Blue() {
      this.$store.commit("element/SET_IS_STYLE", true);
      this.$store.commit("element/SET_COL", "#cccef6ff");
      this.closeModal();
    },
    Yellow() {
      this.$store.commit("element/SET_IS_STYLE", true);
      this.$store.commit("element/SET_COL", "#f1eac1ff");
      this.closeModal();
    },
    Grey() {
      this.$store.commit("element/SET_IS_STYLE", true);
      this.$store.commit("element/SET_COL", "#dee9f8ff");
      this.closeModal();
    },
    White() {
      this.$store.commit("element/SET_IS_STYLE", true);
      this.$store.commit("element/SET_COL", "#ffffffff");
      this.closeModal();
    },
    None() {
      this.$store.commit("element/SET_IS_STYLE", true);
      this.$store.commit("element/SET_COL", "#ffffff00");
      this.closeModal();
    },
  },
  computed: {
    GETshowModal() {
      return this.$store.state.element.showMenu;
    },
    coords() {
      return this.$store.state.element.coordsMenu;
    },
  },
};
</script>
  
  
  <style lang="scss">
.toolmenu_modal_element-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.toolmenu_modal_element-wrapper {
  position: fixed;
}

.toolmenu_modal_element-container {
  width: 200px;
  margin: 0px;
  padding: 5px;
  background-color: $white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
}
.buttons_tool_menu-element {
  height: 24px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: 2px 0;

  font-weight: 400;
  font-size: $font_size-1;
  color: $grey3;

  svg {
    height: 14px;
    width: 14px;
    margin: 5px;
    fill: none;
    #str {
      stroke: $grey2;
    }
    #fil {
      fill: $grey2;
    }
  }
  &:hover {
    background: $grey5;
    #str {
      stroke: $black1;
    }
    #fil {
      fill: $black1;
    }
  }
}
.buttons_tool_style-element {
  display: flex;
  justify-content: space-around;
  div {
    width: 15px;
    height: 15px;
    border-radius: 5px;
    border: 1px solid #d2dcf5;
  }
  #Orange {
    background: #f3cece;
  }
  #Green {
    background: #cbf4d6;
  }
  #Blue {
    background: #cccef6;
  }
  #Yellow {
    background: #f1eac1;
  }
  #Grey {
    background: #dee9f8;
  }
  #White {
    background: #ffffff;
  }
  #None {
    background: transparent;
  }
}
</style>
  