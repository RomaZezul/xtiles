<template>
  <div 
  @click.self="closeModal" 
  class="favorite_modal-mask" 
  v-if="GETshowModal"
  >
    <div class="favorite_modal-wrapper">
        <div class="favorite_modal-container">
            <div class="favorite_modal-header">
          <span>Favorite</span>
        </div>
        <div class="favorite_modal-main">
          <FavoriteBtnFavorite
            v-for="item in GetListFavoritePage"
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
    methods: {
    closeModal() {
      this.$store.commit("favorite/SET_SHOW_MODAL", false);
    },
  },
  computed: {
    GETshowModal() {
      return this.$store.state.favorite.showModal;
    },
    GetListFavoritePage() {
      return this.$store.state.favorite.listFavoritePage;
    },
  },

};
</script>
<style lang="scss">
.favorite_modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.favorite_modal-wrapper {
  position: absolute;
  top: 50px;
  right: 92px;
}
.favorite_modal-container {
  width: 240px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: $white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
}
.favorite_modal-header {
  border-bottom: 1px solid #a3abb8;
  padding-bottom: 15px;
  margin-bottom: 15px;
  span {
    font-family: $font-fredoka;
    font-weight: 600;
    font-size: $font_size-1;
    color: $grey3;
  }
  }


</style>