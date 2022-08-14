export const state = () => ({
    showModal: false,
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

    }

}

