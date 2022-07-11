<template>
  <div class="side_bar">
    <div>
      <Logo/>
    </div>
    <hr />
    <hr />
    <h1>WORKSPACE</h1>
    <SideBarWsBar/>

    <div>
      <SideBarButtonsCreateWs/>
    </div>
    <hr />
    <ModalWindovsCreateWs/>
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
.side_bar {
  width: 100%;
  flex-direction: column;
  min-height: 0;
  cursor: default;
}
</style>