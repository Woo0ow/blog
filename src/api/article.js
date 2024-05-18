import axios from 'axios'
function getArticles() {
    return axios.get('api/articles').then(data => {
        return data.data
    })
}
function getArticle(id){
    return axios.post('api/articles/'+id).then(data=>{
        return data.data
    })
}
export default {
    getArticles,
    getArticle
}