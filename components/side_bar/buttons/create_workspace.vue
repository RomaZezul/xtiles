<template>
  <div>
    <button id="show-modal" @click="showModal = true">+</button>
    <!-- use the modal component, pass in the prop -->
    <ModalCreateWorkspace v-if="showModal" @close="showModal = false"> </ModalCreateWorkspace>
  </div>
</template>
   


<script>
export default {
   data: () => ({
     showModal: false,
   }),
}
</script>