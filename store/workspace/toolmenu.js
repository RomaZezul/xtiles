export const state = () => ({
    showModal: false,
    showModalRename: false,
    coords: {
        left: 0,
        top: 0
    },
    Ws: {
        name: '',
        id: ''
    },

})

export const mutations = {
    SET_SHOW_MODAL(state, value) {
        state.showModal = value;
    },
    SET_SHOW_MODAL_RENAME(state, value) {
        state.showModalRename = value;
    },
    SET_WS(state, value) {
        state.Ws = value;
    },

    SET_COORDS(state, value) {
        state.coords = value;
    }
}

export const actions = {
    async DELETE_WS(context) {
        let respons = await this.$axios.delete("/api/workspaces/" + context.state.Ws.id);
        if (localStorage.getItem("CurrentWs") == context.state.Ws.id)
            localStorage.setItem("CurrentWs", 0);
        context.dispatch("workspace/GET_WORKSPACE", null, {
            root: true
        });
        context.dispatch("favorite/GET_LIST_FAVORITE_PAGE", null, {
            root: true
        });
    },
    async RENAME(context, value) {
        if (value == "")
            value = "Untitled"
        let respons = await this.$axios.put("/api/workspaces/" + context.state.Ws.id, {
            name: value
        });
        // if (localStorage.getItem("CurrentWs") == context.state.Ws.id)
        //     localStorage.setItem("CurrentWs", 0);
        context.dispatch("workspace/GET_WORKSPACE", null, {
            root: true
        });

    }

}

