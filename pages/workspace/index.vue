<template>
  <div>
    <MainMainBarWsBar />
    <MainPageMiniature   
          v-for="item in pages"
      :key="item.id"
      :id="item.id"
      :name="item.name"
      :date="item.dateCreate" 
    >
    </MainPageMiniature>
>
  </div>
</template>


<script>
export default {
  layout: "workspace",
    beforeMount() {
    if (localStorage.getItem("CurrentWs") == null) {
      this.$router.push("/personal");
    }
    this.$store.dispatch("workspace/GET_WORKSPACE");
  },


  computed: {
    pages(){
      return this.$store.state.pagge.pages;
    }
  },
};
</script>