<template>
  <div class="side_bar">
    <div>
      <Logo />
    </div>
    <hr />
    <hr />
    <div>
      Personal space
      <div>
        <NuxtLink tag="button" to="/workspace/shared" exact>
          Shared Pages
        </NuxtLink>
      </div>
      <div>
        <NuxtLink tag="button" to="/workspace/personal" exact>
          Personal Pages
        </NuxtLink>
      </div>
    </div>

    <div>
      Workspace
      <button id="show-modal" @click="showModal = true">+</button>
      <ModalCreateWorkspace v-if="showModal" @close="showModal = false">
      </ModalCreateWorkspace>
    </div>
    <hr />
    <div>
      <ButtonSelectMenu :link="this.link" :txt="this.txt" :fa="this.fa">
      </ButtonSelectMenu>
    </div>
  </div>
</template>

<script>
import ButtonSelectMenu from '~/components/side_bar/buttons/select_menu.vue'
import ButtonCreateWorkspace from '~/components/side_bar/buttons/create_workspace.vue'
import ModalCreateWorkspace from '~/components/modal_windovs/create_workspace.vue'
import Logo from '~/components/logo.vue'
export default {
  data: () => ({
    link: '/workspace/123456',
    txt: 'asdfg',
    fa: 'fa fa-home',
    showModal: false,
  }),
  methods: {},

  components: {
    ButtonSelectMenu,
    ModalCreateWorkspace,
    ButtonCreateWorkspace,
    Logo,
  },
}
</script>

<style>
.side_bar {
  width: 100%;
}
</style>