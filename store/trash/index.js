export const state = () => ({
    showModal: false,
    listPage: [],
})

export const mutations = {
    SET_SHOW_MODAL(state, value) {
        state.showModal = value;
    },

    SET_LIST_PAGE(state, value) {
        state.listPage = value;
    },
}

export const actions = {
    async GET_LIST_PAGE(context) {
        let respons = await this.$axios.get("/api/pages/trash");
        context.commit("SET_LIST_PAGE", respons.data);
    },
    async CLEAR_ALL(context) {
        await this.$axios.delete("/api/pages/cleartrash");
        context.dispatch("GET_LIST_PAGE");
    },
    async DELETE_PAGE(context, id) {
        await this.$axios.delete("/api/pages/" + id);
        context.dispatch("GET_LIST_PAGE");
    },
    async REESTABLISH(context, id) {
        await this.$axios.put("/api/pages/PushPullPageToTrash/" + id);
        context.dispatch("workspace/GET_WORKSPACE", null, {
            root: true
        });
        context.dispatch("GET_LIST_PAGE");
    }
}