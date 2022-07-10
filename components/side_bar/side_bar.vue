<template>
  <div class="side_bar">
    <div>
      <Logo />
    </div>
    <hr />
    <hr />
    <h1>WORKSPACE</h1>
    <WorkspaceBar />

    <div>
      <ButtonCreateWorkspace />
    </div>
    <hr />
    <ModalCreateWorkspace />
  </div>
</template>

<script>
import WorkspaceBar from "./WS_bar.vue";
import ButtonCreateWorkspace from "~/components/side_bar/buttons/createWS.vue";
import ModalCreateWorkspace from "~/components/modal_windovs/createWS.vue";
import Logo from "~/components/logo.vue";
export default {
  data: () => ({}),
  methods: {},
  computed: {},

  components: {
    WorkspaceBar,
    ModalCreateWorkspace,
    ButtonCreateWorkspace,
    Logo,
  },
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