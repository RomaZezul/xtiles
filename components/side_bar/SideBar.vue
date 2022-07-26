<template>
  <div class="side_bar-root">
    <div class="side_bar-logo">
      <Logo />
    </div>
    <p>PERSONAL SPACE</p>
    <div>
      <SideBarButtonsPersonalPage />
    </div>
    <p>WORKSPACE</p>
    <SideBarWsBar />
    <div>
      <SideBarButtonsCreateWs />
    </div>
    <hr />
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
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: nowrap;
  p {
    font-family: $font-fredoka;
    margin-left: auto;
    margin-right: auto;
    margin-top: 17px;
    font-size: $font_size-1;
    color: $grey3;
  }
}

.side_bar-logo {
  margin-left: 17px;
  margin-top: 21px;
}
</style>