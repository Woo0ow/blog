import axios from 'axios';
function getTags(){
    return axios.get('api/tags').then(data=>{
        return data.data
    })
}
function getTag(id){
    return axios.post('api/tags/'+id).then(data=>{
        return data.data
    })
}
export default{
    getTags,
getTag
}