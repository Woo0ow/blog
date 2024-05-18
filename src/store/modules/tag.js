import tags from '@/api/tag.js'
const state={
    tags:[]
}
const getters={

}
const actions={
getTags(){
return tags.getTags().then(data=>{
    console.log(data)
    return data.data
})
}
}
const mutations={

}
export default {
  namespace: false,
  state,
  getters,
  actions,
  mutations
}