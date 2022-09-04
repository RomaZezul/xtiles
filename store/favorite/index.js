export const state = () => ({
    showModal: false,
    listFavoritePage: [],
})

export const mutations = {
    SET_SHOW_MODAL(state, value) {
        state.showModal = value;
    },

    SET_LIST_FAVORITE_PAGE(state, value) {
        state.listFavoritePage = value;
    },
}

export const actions = {
    async GET_LIST_FAVORITE_PAGE(context) {
        let respons = await this.$axios.get("/api/pages/favorite");
        context.commit("SET_LIST_FAVORITE_PAGE", respons.data);
    },
async REMOVE_FAVORITE(context, id){
    let respons = await this.$axios.put("/api/pages/AddToFavourite/" + id,)
    //context.dispatch("favorite/GET_LIST_FAVORITE_PAGE");
    context.commit("SET_LIST_FAVORITE_PAGE", respons.data);

    context.dispatch("workspace/GET_WORKSPACE", null, {
        root: true
    });


}
}