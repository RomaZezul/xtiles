<template>
    <div :id="id">
        {{element.contentHtml}}
    </div>
</template>
<script>
export default {
    props:["id", "element"]
}
</script>
<style lang="scss">
    
</style>