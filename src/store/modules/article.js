import article from '@/api/article.js'
const state = {
  articles: [],
  article:{}
}
const getters = {

}
const actions = {
  getArticleLi({ commit }) {
    return article.getArticles().then(data => {
      const articles = data.data
      commit('setArticles', articles)
    })
  },
  getArticle({commit},id){
    return article.getArticle(id).then(data=>{
      const article=data.data
      commit('setArticle',article)
    }) 
  }
}
const mutations = {
  setArticles(state, articles) {
    state.articles = articles
  },
  setArticle(state,article){
state.article=article
  }
}
export default {
  namespace: false,
  state,
  getters,
  actions,
  mutations
}