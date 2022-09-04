<template>
  <div
    @click.self="closeModal"
    class="trash_toolmenu_modal-mask"
    v-if="GETshowModal"
  >
    <div class="trash_toolmenu_modal-wrapper">
      <div class="trash_toolmenu_modal-container">
        <div class="trash_toolmenu_modal-header">
          <span>Tresh</span>
          <button @click="ClearAll()">CLEAR ALL</button>
        </div>
        <div class="trash_toolmenu_modal-main">
          <ModalWindovsTrashDeletedPage
            v-for="item in GetListPage"
            :key="item.id"
            :id="item.id"
            :name="item.name"
          />
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
      this.$store.commit("trash/SET_SHOW_MODAL", false);
    },
    ClearAll() {
      this.$store.dispatch("trash/CLEAR_ALL");
    },
  },
  computed: {
    GETshowModal() {
      return this.$store.state.trash.showModal;
    },
    GetListPage() {
      return this.$store.state.trash.listPage;
    },
  },
};
</script>


<style lang="scss">
.trash_toolmenu_modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.trash_toolmenu_modal-wrapper {
  position: absolute;
  left: 85px;
  bottom: 55px;
}

.trash_toolmenu_modal-container {
  width: 240px;
  margin: 0px;
  padding: 10px;
  background-color: $white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
}
.trash_toolmenu_modal-header {
  display: flex;
  border-bottom: 1px solid #a3abb8;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 15px;
  margin-bottom: 15px;
  span {
    
    font-weight: 600;
    font-size: $font_size-1;
    color: $grey3;
  }
  button {
    width: 137px;
    height: 33px;
    border-radius: 8px;
    font-size: $font_size-1;
    border-style: none;
    background: $grey5;
    color: $grey2;
    &:hover {
      background: $pink1;
      color: $white;
    }
    &:active {
      background: $pink2;
    }
  }
}
</style>
