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
  computed: {
    workspaces() {
      return this.$store.state.workspace.workspaces;
    },
  },
};
</script>
<style lang="scss">
.WSbar {
  overflow-y: scroll;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  height: 30%;
  width: $size-1 + 20px;
}
</style>