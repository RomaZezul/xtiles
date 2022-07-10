<template>
  <div>
    <ButtonCreateWorkspace/>
    <ModalCreateWorkspace/>
  </div>
</template>


<script>
import ButtonCreateWorkspace from "~/components/body/buttons/createWS.vue";
import ModalCreateWorkspace from "~/components/modal_windovs/createWS.vue";

export default {
  layout: 'workspace',
    components: {
    ModalCreateWorkspace,
    ButtonCreateWorkspace,
  },

}
</script>