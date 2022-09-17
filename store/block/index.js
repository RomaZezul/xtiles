export const state = () => ({
    CurrentBlock: {
        title: 'Untitled',
        id: '',
        x: 0,
        y: 0,
        height: 0,
        width: 0,
        yWin: 0,
    },
    showModal: false,
    blocks: [],
    pagePointsHeight: 0,
    isStyle: false,
    col: "#ffffffff",

})

export const mutations = {
    SET_IS_STYLE(state, value) {
        state.isStyle = value;
    },
    SET_COL(state, value) {
        state.col = value;
    },
    SET_CURENT_BLOCK(state, value) {
        state.CurrentBlock.yWin = value.yWin;
        state.blocks.forEach(bl => {
            if (bl.id == value.id) {
                state.CurrentBlock.id = bl.id;
                state.CurrentBlock.x = bl.x;
                state.CurrentBlock.y = bl.y;
                state.CurrentBlock.title = bl.title;
                state.CurrentBlock.width = bl.width;
                state.CurrentBlock.height = bl.height;
            }
        })
    },
    SET_CURENT_BLOCK_height(state, value) {
        state.CurrentBlock.height = value;
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
    },
    async UPDATE(context) {
        await this.$axios.put("/api/Blocks/" + context.state.CurrentBlock.id, {
            x: context.state.CurrentBlock.x,
            y: context.state.CurrentBlock.y,
            height: context.state.CurrentBlock.height,
            width: context.state.CurrentBlock.width
        });
    },
    async SET_STYLE(context) {
        await this.$axios.put("/api/Blocks/updateBlockStyle/" + context.state.CurrentBlock.id, {
            style: context.state.col
        });
    }
}
