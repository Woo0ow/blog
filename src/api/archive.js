import axios from 'axios'
function getArchive(){
    return axios.get('api/archive').then(data=>{
       return data.data
    })
}
export default{
    getArchive
}