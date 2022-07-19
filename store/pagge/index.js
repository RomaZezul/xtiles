export const state = () => ({
    CurrentPage: {
        name: '',
        id: ''
    },
    showModal: false,
    pages: [],
})

export const mutations = {
    SET_CURENT_PAGE(state, value) {
        state.CurrentPage = value;
    },
    SET_PAGES(state, value) {
        state.pages = value
    },
    SET_SHOW_MODAL(state, value) {
        state.showModal = value;
    }

}

export const actions = {
    async CREATE_PAGE(context, name) {
        
    },

    async GET_PAGE(context, id) {

    },


}
