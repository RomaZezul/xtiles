export const state = () => ({
    workspace: {
        name: '',
        id: '',
    },

    workspaces: [],
})

export const mutations = {
    SET_WORKSPACE(state, value) {
        state.workspace = value;
    },
    SET_WORKSPACES(state, value) {
        state.workspaces = value
    },
}

export const actions = {
    async CREATE_WORKSPACE(context, name) {
        let respons = await this.$axios.post("/api/workspaces", { name: name, });
        if (respons.status == 200) {
            context.commit("SET_WORKSPACE", respons.data);
            this.$router.push("/workspace/" + context.state.workspace.id);
            context.dispatch("SET_WORKSPACES")
        }
    },

    async SET_WORKSPACES(context) {
        let respons = await this.$axios.get("/api/workspaces");
        context.commit("SET_WORKSPACES", respons.data)
    },

}
