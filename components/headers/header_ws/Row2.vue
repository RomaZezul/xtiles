<template>
    <div class="container">
      <div id="button3">
        <button></button>
      </div>

      <div id="button2">
        <button></button>
      </div>

      <div id="button1">
       <HeadersButtonsOpenProfile/>
      </div>
    </div>
</template>


<script>
export default {
  computed: {
    loggedIn() {
      return this.$auth.loggedIn;
    },
    user() {
      return this.$auth.user;
    },
  },

  methods: {},
};
</script>


<style>
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

#button3 {
  width: 100%;
  border: 2px solid black;
  background-color: yellow;
}
</style>