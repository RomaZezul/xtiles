<template>
  <div
    @click.self="closeModal"
    class="toolmenu_modal_page-mask"
    v-if="GETshowModal"
  >
    <div
      class="toolmenu_modal_page-wrapper"
      :style="{ left: coords.left, top: coords.top }"
    >
      <div class="toolmenu_modal_page-container">
        <div class="buttons_tool_menu-page" @click="addToFavorites">
          <svg xmlns="http://www.w3.org/2000/svg">
            <path
              id="fil"
              v-if="isFavorite"
              d="M6.18389 0.793735C6.37507 0.454032 6.86419 0.454032 7.05536 0.793734L8.39296 3.17049C8.61679 3.56821 9.0095 3.8424 9.45999 3.91547L12.176 4.35604C12.5825 4.42198 12.7395 4.92355 12.4431 5.20946L10.6016 6.98579C10.251 7.32397 10.0865 7.81134 10.1603 8.29282L10.5457 10.805C10.6061 11.1989 10.204 11.5017 9.84215 11.3349L7.24758 10.1389C6.8491 9.95521 6.39016 9.95521 5.99168 10.1389L3.39711 11.3349C3.03523 11.5017 2.63315 11.1989 2.69357 10.805L3.07894 8.29282C3.1528 7.81134 2.98825 7.32397 2.63766 6.98579L0.796147 5.20946C0.499751 4.92355 0.656713 4.42198 1.06321 4.35604L3.77927 3.91547C4.22976 3.8424 4.62247 3.56821 4.8463 3.17049L6.18389 0.793735Z"
            />
            <path
              id="str"
              v-else
              d="M5.74816 0.548511C6.13051 -0.130893 7.10874 -0.130894 7.4911 0.548511L8.82869 2.92527C8.97791 3.19041 9.23972 3.37321 9.54005 3.42192L12.2561 3.8625C13.0691 3.99437 13.383 4.99751 12.7902 5.56932L10.9487 7.34566C10.715 7.57111 10.6053 7.89602 10.6545 8.21701L11.0399 10.7292C11.1607 11.517 10.3566 12.1226 9.63283 11.789L7.03826 10.593C6.77261 10.4705 6.46665 10.4705 6.20099 10.593L3.60643 11.789C2.88267 12.1226 2.07852 11.517 2.19935 10.7292L2.58472 8.21701C2.63396 7.89602 2.52426 7.57111 2.29053 7.34566L0.44902 5.56932C-0.143772 4.99751 0.170151 3.99437 0.983156 3.8625L3.69921 3.42192C3.99954 3.37321 4.26135 3.19041 4.41056 2.92527L5.74816 0.548511Z"
            />
          </svg>
          Add to favorites
        </div>

        <div class="buttons_tool_menu-page" @click="rename">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="16"
            height="16"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.5 2.58203C10.4668 2.58203 10.4351 2.5952 10.4116 2.61864L2.91161 10.1186L2.65089 9.85792L2.91161 10.1186C2.9 10.1303 2.8908 10.144 2.88451 10.1592C2.87823 10.1744 2.875 10.1906 2.875 10.207V12.9999C2.875 13.0331 2.88817 13.0649 2.91161 13.0883C2.93505 13.1118 2.96685 13.1249 3 13.1249H5.79289C5.80931 13.1249 5.82556 13.1217 5.84073 13.1154C5.85589 13.1091 5.86967 13.0999 5.88128 13.0883L13.3813 5.58831C13.4047 5.56487 13.4179 5.53308 13.4179 5.49992C13.4179 5.46677 13.4047 5.43498 13.3813 5.41154L10.5884 2.61864C10.5649 2.5952 10.5332 2.58203 10.5 2.58203ZM9.88128 2.08831C10.0454 1.92422 10.2679 1.83203 10.5 1.83203C10.7321 1.83203 10.9546 1.92422 11.1187 2.08831L13.9116 4.88121C14.0757 5.0453 14.1679 5.26786 14.1679 5.49992C14.1679 5.73199 14.0757 5.95455 13.9116 6.11864L6.41161 13.6186C6.33036 13.6999 6.2339 13.7643 6.12774 13.8083C6.02158 13.8523 5.9078 13.8749 5.79289 13.8749H3C2.76794 13.8749 2.54538 13.7827 2.38128 13.6186C2.21719 13.4545 2.125 13.232 2.125 12.9999V10.207C2.125 10.0921 2.14763 9.97834 2.19161 9.87218C2.23558 9.76602 2.30003 9.66957 2.38128 9.58831L2.64645 9.85348L2.38128 9.58831L9.88128 2.08831Z"
              fill="currentColor"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.23483 3.73483C8.38128 3.58839 8.61872 3.58839 8.76517 3.73483L12.2652 7.23483C12.4116 7.38128 12.4116 7.61872 12.2652 7.76516C12.1187 7.91161 11.8813 7.91161 11.7348 7.76516L8.23483 4.26517C8.08839 4.11872 8.08839 3.88128 8.23483 3.73483Z"
              fill="currentColor"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.26657 9.76657C2.41302 9.62013 2.65046 9.62013 2.7969 9.76657L6.23315 13.2028C6.3796 13.3493 6.3796 13.5867 6.23315 13.7332C6.08671 13.8796 5.84927 13.8796 5.70282 13.7332L2.26657 10.2969C2.12013 10.1505 2.12013 9.91302 2.26657 9.76657Z"
              fill="currentColor"
            ></path>
          </svg>
          Rename
        </div>
        <div class="buttons_tool_menu-page" @click="deletePage">
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
  name: "ModalToolmenuPage",

  methods: {
    closeModal() {
      this.$store.commit("pagge/toolmenu/SET_SHOW_MODAL", false);
    },
    deletePage() {
      this.$store.dispatch("pagge/toolmenu/PAGE_TO_TRASH");
      this.closeModal();
    },
    addToFavorites() {
      this.$store.dispatch("pagge/toolmenu/ADD_REMOVE_FAVORITE");
      this.closeModal();
    },
    rename() {
      this.$store.commit("pagge/toolmenu/SET_SHOW_MODAL_RENAME", true);
      this.closeModal();
    },
  },
  computed: {
    GETshowModal() {
      return this.$store.state.pagge.toolmenu.showModal;
    },
    coords() {
      return this.$store.state.pagge.toolmenu.coords;
    },
    isFavorite() {
      return this.$store.state.pagge.toolmenu.Page.favorite;
    },
  },
};
</script>


<style lang="scss">
.toolmenu_modal_page-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.toolmenu_modal_page-wrapper {
  position: absolute;
}

.toolmenu_modal_page-container {
  width: 200px;
  margin: 0px;
  padding: 5px 5px;
  background-color: $white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
}
.buttons_tool_menu-page {
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
</style>
