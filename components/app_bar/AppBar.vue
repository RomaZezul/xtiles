<template>
  <div class="app_bar-root">
    <div v-if="isPage" class="sw" @click="bool()">{{ Arrow }}</div>
    <div class="app_bar-breadcrumbs">
      <span v-if="isPage">dfgh > yeter > jhgjhg > jfytfhfyh</span>
    </div>
    <div class="app_bar-buttons">
      <button class="app_bar-button"></button>

      <button class="app_bar-button"></button>

      <AppBarButtonsFavorite class="app_bar-button" />

      <AppBarButtonsOpenProfile class="app_bar-button" />
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      bool1: true,
    };
  },
  methods: {
    bool() {
        this.$store.commit("SET_SIZE_SB", this.bool1=!this.bool1);
    },
  },
  computed: {
    loggedIn() {
      return this.$auth.loggedIn;
    },
    user() {
      return this.$auth.user;
    },
    isPage() {
      return this.$store.state.isPage;
    },
    Arrow(){
      return this.$store.state.Arrow;
    }
  },
};
</script>


<style lang="scss">
.app_bar-root {
  position: relative;
  margin: 9px 40px 0 40px;
  padding-bottom: 7px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid $grey4;
}
.sw {
  position: absolute;
  top: 0px;
  left: -38px;
  
  font-size: $font_size-2;
  font-weight: 700;
  cursor: pointer;
  height: 32px;
  width: 32px;
  border-radius: 16px;
  text-align: center;
  &:hover {
    background: $grey5;
  }
}
.app_bar-breadcrumbs {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: flex-start;
  width: 60%;

  span {
    margin-left: 10px;
    text-align: left;
    overflow-x: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    
    font-size: $font_size-1;
  }
}
.app_bar-buttons {
  display: flex;
  align-items: center;
}
.app_bar-button {
  margin-left: 13px;
}
</style>