import data from '../data/tags/data.json'
export default function (options) {
   let id = null;
   if (options.type === 'POST') 
         id = options.url.match(/api\/tags\/(\d+)/)[1];
   
   return {
      code: 200,
      msg: '请求成功',
      data:id?data.filter(item=>item.id===id):data
   }
}