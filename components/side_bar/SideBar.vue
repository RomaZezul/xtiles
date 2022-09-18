<template>
  <div class="side_bar-root">
    <div class="side_bar-wrap">
      <nuxt-link to="/" >

      <Logo class="app_logo" />
      </nuxt-link>
      <span class="side_bar-text">PERSONAL SPACE</span>
      <SideBarButtonsPersonalPage />
      <span class="side_bar-text">WORKSPACE</span>
      <SideBarWsBar />
      <SideBarButtonsCreateWs />
    </div>
    <SideBarButtonsTrash />
  </div>
</template>

<script>
export default {
  name: "SideBar",
  data: () => ({}),
};
</script>

<style lang="scss">
.side_bar-root {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: space-between;
}
.side_bar-wrap {
  display: flex;
  flex-direction: column;
  flex: 1 1;
  min-height: 0;
  justify-content: flex-start;
}
.side_bar-text {
  margin-left: auto;
  margin-right: auto;

  margin-top: 17px;
  margin-bottom: 10px;
  font-size: $font_size-1;
  color: $grey3;
}

.app_logo {
  margin-left: 17px;
  margin-top: 21px;
}
</style>