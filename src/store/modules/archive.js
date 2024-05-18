import archive from "@/api/archive"
const state={
    archive:[]
}
const getters={

}
const actions={
getArchive({commit}){
    return archive.getArchive().then(data=>{
      const archive=data.data
      commit('setArchive',archive)
    })
}
}
const mutations={
setArchive(state,archive){
state.archive=archive
}
}
export default {
  namespace: false,
  state,
  getters,
  actions,
  mutations
}