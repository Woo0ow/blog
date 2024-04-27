import axios from 'axios';
function getTags(){
    return axios.get('/tags').then(resp=>resp.data)
}
export{
    getTags
}