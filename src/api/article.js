import axios from 'axios'

function getArticleList(){
    return axios.get('/article/list').then(res=>{
        return res.data
    })
}
function getArticleDetail(id){
    return axios.get('/article').then(res=> res.data)
}
export{
    getArticleList,
    getArticleDetail
}