export const state = () => ({
    showModal: false,
    showModalRename: false,

    coords: {
        left: 0,
        top: 0
    },
    Page: {
        name: '',
        id: ''
    }
})

export const mutations = {
    SET_SHOW_MODAL(state, value) {
        state.showModal = value;
    },
    SET_SHOW_MODAL_RENAME(state, value) {
        state.showModalRename = value;
    },
    SET_PAGE(state, value) {
        state.Page = value;
    },


    SET_COORDS(state, value) {
        state.coords = value;
    }
}

export const actions = {
    async PAGE_TO_TRASH(context) {
        let respons = await this.$axios.put("/api/pages/PushPullPageToTrash/" + context.state.Page.id);
        context.dispatch("workspace/GET_WORKSPACE", null, {
            root: true
        });
        context.dispatch("trash/GET_LIST_PAGE", null, { root: true });
    },
    async RENAME(context, value) {
        if (value == "")
            value = "Untitled"
        var res = await this.$axios.put("/api/pages/" + context.state.Page.id, {
            name: value
        });
        context.dispatch("workspace/GET_WORKSPACE", null, {
            root: true
        });
        if (localStorage.getItem("CurrentPage") == context.state.Page.id) {
            context.commit("pagge/SET_CURENT_PAGE", res.data, {
                root: true
            });
        }
    },

}
