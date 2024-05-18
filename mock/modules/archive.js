import data from '../data/articles/data.json'
//按照条件分组 这里按照createdAt分组
function organize(array,condition){
let conditionSet=[...new Set(array.map(item=>item[condition]))]
let res=conditionSet.map(Item=>{
    
    return{[condition]:Item,data:array.filter(item=>item[condition]===Item)} 
})
return res
}
export default function(options){
return{
    code:200,
    msg:'请求成功',
    data:organize(data,'createdAt')
} 
}