const state={
    navIsShow:false
}
const getters={}
const actions={}
const mutations={
    toggle(state,payload){
        state.navIsShow=payload
    }
}
export default {
  namespace: true,
  state,
  getters,
  actions,
  mutations
}