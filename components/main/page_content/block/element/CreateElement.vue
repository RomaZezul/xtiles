<template>
    <div>
       <input autofocus @blur="create()" type="text" v-model="elText"> 
    </div>
</template>
<script>
export default {
    data() {
        return {
            elText: ""
        }
    },
    methods: {
       async create(){
let respons = await this.$axios.post("/api/elements", {
            contentHtml: this.elText,
            blockId: this.$store.state.block.CurrentBlock.id
        });
        }
    },
}
</script>
<style lang="scss">
    
</style>