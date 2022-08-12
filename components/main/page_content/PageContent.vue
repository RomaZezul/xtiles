<template>
  <div class="page_content-root">
            <MainPagePoints />

  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.page_content-root {
  height: 100%;
  overflow-y: scroll;
  &::-webkit-scrollbar{
    width: 4px;
    margin: -10px;
  }
}
</style>