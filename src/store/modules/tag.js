import tags from '@/api/tag.js'
const state={
    tags:[]
}
const getters={

}
const actions={
getTags({commit}){
return tags.getTags().then(data=>{
  const tags=data.data;
commit('setTags',tags)
})
}
}
const mutations={
setTags(state,tags){
  state.tags=tags
}
}
export default {
  namespace: false,
  state,
  getters,
  actions,
  mutations
}