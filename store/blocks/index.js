export const state = () => ({
    CurrentBlock: {
        name: 'Untitled',
        id: ''
    },
    showModal: false,
    blocks: [],
    
})

export const mutations = {
    SET_CURENT_BLOCK(state, value) {
        state.CurrentBlock = value;
    },
    SET_BLOCKS(state, value) {
        state.blocks = value
    },
    SET_SHOW_MODAL(state, value) {
        state.showModal = value;
    }

}

export const actions = {
}
