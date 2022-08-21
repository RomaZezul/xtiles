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
        localStorage.setItem("CurrentWs", value.id)
    },
    SET_WORKSPACES(state, value) {
        state.workspaces = value
    },
    SET_SHOW_MODAL(state, value) {
        state.showModal = value;
    },

}

export const actions = {
    async CREATE_WORKSPACE(context, name) {
        if(name=="")
        name="Untitled"

        let respons = await this.$axios.post("/api/workspaces", { name: name, });
        if (respons.status == 200) {
            context.commit("SET_CURENT_WS", respons.data);
            this.$router.push("/workspace");
            context.dispatch("GET_WORKSPACE")
        }

    },

    async GET_WORKSPACE(context) {
        if (localStorage.getItem("CurrentWs") > 0) {
            let respons = await this.$axios.get("/api/workspaces/" + localStorage.getItem("CurrentWs"));
            context.commit("SET_CURENT_WS", {
                name: respons.data.name,
                id: respons.data.id
            });
            context.commit("pagge/SET_PAGES", respons.data.pages, {
                root: true
            });

        }else            this.$router.push("/personal");

        context.dispatch("SET_WORKSPACES")

    },

    async SET_WORKSPACES(context) {
        let respons = await this.$axios.get("/api/workspaces");
        context.commit("SET_WORKSPACES", respons.data)
    },

}
