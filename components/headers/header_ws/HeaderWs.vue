<template>
<div class="header1">

  <div class="container">
    <div id="button3">
      <button></button>
    </div>

    <div id="button2">
      <button></button>
    </div>

    <div id="button1">
      <button v-if="loggedIn" @click="showModal = true">
        {{ user.userName }}
      </button>
      <ModalWindovsProfile v-if="showModal" @close="showModal = false"> </ModalWindovsProfile>
    </div>
  </div>
  </div>

</template>


<script>
export default {
  data: () => ({
    showModal: false,
  }),

  computed: {
    loggedIn() {
      return this.$auth.loggedIn
    },
    user() {
      return this.$auth.user
    },
  },

  methods: {
    
  },
}
</script>


<style>
.header1{
  display: flex;
  flex: 1 1;
    border-bottom: 1px solid black;
  justify-content: flex-end;

}
.container {
  display: flex;

  flex-direction: row;



  padding: 20px;
}

#button1 {
  width: 150px;
  border: 2px solid black;
  background-color: green;
  border-right: 0px;
  height: 20px;
}

#button2 {
  width: 100%;
  border: 2px solid black;
  background-color: yellow;
}

#button3{
  width: 100%;
  border: 2px solid black;
  background-color: yellow;

}
</style>