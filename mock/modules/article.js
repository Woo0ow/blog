import data from '../data/articles/data.json'
import tags from '../data/tags/data.json'
export default function (options) {
    let mid = null
    if (options.type === 'POST')
        mid = options.url.match(/api\/articles\/(\d+)/)[1];
    const mdata = data.map(item => {
        if (mid) {
            const { id,contentFileName} = item;
            return {
                id,
                content:require(`../data/articles/${contentFileName}`).default
            }
        }
    const { id, title, abstract, tagId, createdAt } = item;
        return {
            id,
            title,
            abstract,
            tagId,
            tag:tags.filter(item=>item.id===tagId)[0].name,
            createdAt
        }

    });
    return {
        code: '200',
        msg: '请求成功',
        data: mid?mdata.filter(item=>item.id=== +mid):mdata,
        length: mdata.length
    }
}