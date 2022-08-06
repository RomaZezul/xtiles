<template>
  <div class="WSbar">
    <SideBarButtonsSelectWs
      v-for="item in workspaces"
      :key="item.id"
      :id="item.id"
      :name="item.name"
    >
    </SideBarButtonsSelectWs>
  </div>
</template>


<script>
export default {
  name: "WsBar",
  computed: {
    workspaces() {
      return this.$store.state.workspace.workspaces;
    },
  },
};
</script>
<style lang="scss">
.WSbar {
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  width: $size-1 + 10px;
  position: relative;
}
</style>