<template>
  <div class="WSbar">
    <SelectWS
      v-for="item in workspaces"
      :key="item.id"
      :id="item.id"
      :name="item.name"
    >
    </SelectWS>
  </div>
</template>


<script>
import SelectWS from "~/components/side_bar/buttons/selectWS.vue";

export default {
  components: {
    SelectWS: SelectWS,
  },
  computed: {
    workspaces() {
      return this.$store.state.workspace.workspaces;
    },
  },
};
</script>
<style>
.WSbar {
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  font-size: 12px;
  line-height: 24px;
  flex: 1 1;
  flex-shrink: 0;
  min-height: 0;
  padding: 16px 0 8px 16px;
  height: 20%;
}
</style>