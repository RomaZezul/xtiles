export const state = () => ({
    showModal: false,
    coords: {
        left: 0,
        top: 0
    }
})

export const mutations = {
    SET_SHOW_MODAL(state, value) {
        state.showModal = value;
    },

    SET_COORDS(state, value) {
        state.coords = value;
    }
}

export const actions = {

}

