import axios from 'axios'
function getArchiveList(){
    return axios.get('/archive').then(resp=> resp.data)
}
export{
    getArchiveList
}