<template>
  <span :id="id" class="element-root" data-text = "true">
    {{ element.contentHtml }}
  </span>
</template>
<script>
export default {
  props: ["id", "element"],
};
</script>
<style lang="scss">
.element-root {
  width: stretch;
  word-break: break-all;
  cursor: text;
}
</style>