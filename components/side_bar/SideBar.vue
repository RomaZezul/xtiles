<template>
  <div class="side_bar-root">
    <div class="side_bar-wrap">
      <Logo class="app_logo" />

      <p>PERSONAL SPACE</p>
      <SideBarButtonsPersonalPage />
      <p>WORKSPACE</p>
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
  p {
    margin-left: auto;
    margin-right: auto;
    
    margin-top: 17px;
    font-size: $font_size-1;
    color: $grey3;
  }
}
.app_logo {
  margin-left: 17px;
  margin-top: 21px;
}
</style>