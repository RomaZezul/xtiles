export const state = () => ({
    CurrentWs: {
        name: '',
        id: ''
    },
    showModal: false,
    workspaces: [],
})

export const mutations = {
    SET_CURENT_WS(state, value) {
        state.CurrentWs = value;
    },
    SET_WORKSPACES(state, value) {
        state.workspaces = value
    },
    SET_SHOW_MODAL(state, value) {
        state.showModal = value;
    }

}

export const actions = {
    async CREATE_WORKSPACE(context, name) {
        let respons = await this.$axios.post("/api/workspaces", { name: name, });
        if (respons.status == 200) {
            context.commit("SET_CURENT_WS", respons.data);
            this.$router.push("/workspace/" + context.state.CurrentWs.id);
            context.dispatch("SET_WORKSPACES")
        }

    },

    async GET_WORKSPACE(context, id) {
        let respons = await this.$axios.get("/api/workspaces/" + id);
        context.commit("SET_CURENT_WS", {
            name: respons.data.name,
            id: respons.data.id
        });
        localStorage.setItem("CurrentWs", JSON.stringify({
            name: respons.data.name,
            id: respons.data.id
        }));

        context.commit("pagge/SET_PAGES", respons.data.pages, {
            root: true
        });

    },

    async SET_WORKSPACES(context) {
        let respons = await this.$axios.get("/api/workspaces");
        context.commit("SET_WORKSPACES", respons.data)
    },

}
