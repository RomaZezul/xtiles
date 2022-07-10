<template>
  <div class="selectWS">
    <button @click="setWS({ name, id })">
      {{ name }}
    </button>
  </div>
</template>


<script>
export default {
  name: "ButtonBar",
  props: ["id", "name"],
  data() {
    return {
      workspace: {
        name: "",
        id: "",
      },
    };
  },

  methods: {
    setWS(value) {
      this.$store.commit("workspace/SET_WORKSPACE", value);
      this.$router.push("/workspace/" + value.id);
    },
  },
};
</script>


<style>
.selectWS{
  margin: 2px;
  width: 200px;
}
.selectWS button{
  width: inherit;
  text-align: left;
}
</style>