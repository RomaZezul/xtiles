<template >
  <div class="page-root">
    <MainMainBarPageBar />
    <div>
      {{ CurrentPage.name }}
    </div>
  </div>
</template>
<script>
import { computed } from "vue";
export default {
  layout: "workspace",
  beforeMount() {
    if (localStorage.getItem("CurrentPage") == null) {
      this.$router.push("/personal");
    }
        this.$store.commit("SWITCH_PAGE", true)

  },
  mounted() {
    if (localStorage.getItem("CurrentPage") == 0) {
      this.$store.dispatch("pagge/CREATE_PAGE");
    } else {
      this.$store.dispatch("pagge/GET_PAGE");
    }
  },
  computed: {
    CurrentPage() {
      if (this.$store.state.pagge.CurrentPage) {
        return this.$store.state.pagge.CurrentPage;
      } else return "";
    },
  },
};
</script>
<style lang="scss">
.page-root{
  margin: 0 40px;
}
</style>