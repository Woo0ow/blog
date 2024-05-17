import * as article from '@/api/article.js'
const state = {
  articles: []
}
const getters = {

}
const actions = {
  getArticleLi({ commit }) {
    return article.getArticleList().then(data => {
      const articles = data.articleLi
      commit('setArticles', articles)
    })
  }
}
const mutations = {
  setArticles(state, articles) {
    state.articles = articles
  }
}
export default {
  namespace:false,
  state,
  getters,
  actions,
  mutations
}