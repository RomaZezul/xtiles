export const state = () => ({
    CurrentBlock: {
        title: 'Untitled',
        id: '',
        x: 0,
        y: 0,
        height: 0,
        width: 0,
    },
    showModal: false,
    blocks: [],
    pagePointsHeight: 0,
})

export const mutations = {
    SET_CURENT_BLOCK(state, value) {
        state.CurrentBlock = value;
    },
    SET_BLOCKS(state, value) {
        state.blocks = value
        var y = 0;
        value.forEach(bl => {
            y = bl.y + bl.height > y ? bl.y + bl.height : y;
        });
        state.pagePointsHeight = y + 1500;
    },
    SET_SHOW_MODAL(state, value) {
        state.showModal = value;
    }

}

export const actions = {
    async CREATE_BLOCK(context, value) {
        let respons = await this.$axios.post("/api/Blocks", {
            pageId: context.rootState.pagge.CurrentPage.id,
            x: value.x,
            y: value.y,
            height: value.height,
            width: value.width,
        });
        context.dispatch("pagge/GET_PAGE", null, {
            root: true
        });
    },
    async DELETE_BLOCK(context) {
        await this.$axios.delete("/api/Blocks/" + context.state.CurrentBlock.id)
        context.dispatch("pagge/GET_PAGE", null, {
            root: true
        });
    }
}
