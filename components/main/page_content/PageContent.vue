<template>
  <div id="page_content" class="page_content-root">
    <MainPagePoints />
  </div>
</template>
<script>
export default {
  name: "PageContent"
};
</script>
<style lang="scss">
.page_content-root {
  height: 100%;
  overflow-y: scroll;
}
</style>