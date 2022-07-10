export const state = () => ({
    showModal: false,
    
  })

  export const mutations = {
    SETshowModal(state, value){
      state.showModal = value;
    }
  }