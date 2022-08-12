export const state = () => ({
    showF: true,
    isPage: false//Если true, значит на странице Page
})
export const mutations = {
    SET_SHOW_F(state, value) {
        state.showF = value;
    },
    SWITCH_PAGE(state, value) {
        state.isPage = value;
    }
}
