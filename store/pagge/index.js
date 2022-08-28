export const state = () => ({
    CurrentPage: {
        name: 'Untitled',
        id: 0
    },
    pages: [],

})

export const mutations = {
    SET_CURENT_PAGE(state, value) {
        state.CurrentPage = value;
        localStorage.setItem('CurrentPage', value.id)
    },
    SET_PAGES(state, value) {
        state.pages = value
    },
}

export const actions = {
    async CREATE_PAGE(context,) {
        let respons = await this.$axios.post("/api/pages", {
            name: "Untitled",
            workSpaceID: context.rootState.workspace.CurrentWs.id
        });
        if (respons.status == 200) {
            context.commit("SET_CURENT_PAGE", respons.data);
        }
        context.dispatch("GET_PAGE");
    },

    async GET_PAGE(context) {
        if (localStorage.getItem('CurrentPage') > 0) {
            let respons = await this.$axios.get("/api/pages/" + localStorage.getItem('CurrentPage'));
            context.commit("SET_CURENT_PAGE", respons.data);
            context.commit("block/SET_BLOCKS", respons.data.listBlocks, {
                root: true
            });
        }

    },


}
