export const state = () => ({
    showForm: true,
    isPage: false,//Если true, значит на странице Page
    sizeSB: 221,
    sizeSB1: 0,
    Arrow: '<<'
    
})
export const mutations = {
    SET_SHOW_FORM(state, value) {
        state.showForm = value;
    },
    SWITCH_PAGE(state, value) {
        state.isPage = value;
    },
    SET_SIZE_SB(state, value) {
        if (value) {
            state.sizeSB = 221;
            state.sizeSB1 = 0;
            state.Arrow = '<<'
        } else {
            state.sizeSB = 10;
            state.sizeSB1 = 10;
            state.Arrow = '>>'
        }
    },

}
