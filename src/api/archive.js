import axios from 'axios'
function getArchive(){
    return axios.get('api/archive').then(data=>{
       console.log(data.data) 
       return data.data
    })
}
export default{
    getArchive
}