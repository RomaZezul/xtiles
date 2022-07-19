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
  data: () => ({}),
  methods: {},
  computed: {},
};
</script>

<style lang="scss">
.side_bar-root {
  width: 100%;
  height: 100%;
  p {
    font-family: $font-fredoka;
    margin-left: $size-4;
    margin-top: 17px;
    font-size: $font_size-1;
    color: $color-3;
  }
}

.side_bar-logo {
  margin-left: $size-3;
  margin-top: 21px;
}
</style>