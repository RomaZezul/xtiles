export const state = () => ({
    showMenu: false,
    isStyle: false,
    id: 0,
    col: '#ffffff00',
    coordsMenu: {}
})

export const mutations = {
    SET_SHOW_MENU(state, value) {
        state.showMenu = value;
    },
    SET_IS_STYLE(state, value) {
        state.isStyle = value;
    },
    SET_COL(state, value) {
        state.col = value;
    },
    SET_ID(state, value) {
        state.id = value;
    },
    SET_COORDS_MENU(state, value) {
        state.coordsMenu = value;
    },

}

export const actions = {
    async CREATE_ELEMENT(context) {
        await this.$axios.post("/api/elements", {
            contentHtml: "#ffffff00<p></p>",
            blockId: context.rootState.block.CurrentBlock.id,
        });
        context.dispatch("pagge/GET_PAGE", null, {
            root: true
        });

    },
    async UPDATE_ELEMENT(context, value){
        await this.$axios.put("/api/elements/" + context.state.id, {
            contentHtml: value,
            blockId: context.rootState.block.CurrentBlock.id
          });
    },
    async DELETE_ELEMENT(context) {
        await this.$axios.delete("/api/elements/" + context.state.id)
        context.dispatch("pagge/GET_PAGE", null, {
            root: true
        });
        
    }
}
