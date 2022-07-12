<template>
  <div class="side_bar-root">
    <div>
      <Logo />
    </div>
    <hr />
    <hr />
    <h1>WORKSPACE</h1>
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

<style>
.side_bar-root {
  width: 100%;
  height: 100%;
}
</style>