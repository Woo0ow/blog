import getRandomInt from "../../src/utils/getRandomInt"
import { tags } from './tags.js'
const articleLiTemplate = {
    'articleLi|21': [
        {
            'id': "@id",
            title: '@ctitle(5,30)',
            abstract: '@cparagraph(3, 10)',
            tag: function () { return tags[getRandomInt(0, tags.length - 1)] },
            'createdAt': '@datetime("yyyy-MM-dd HH:mm:ss")' // Mock a creation timestamp

        }
    ]
}


export {
    articleLiTemplate,
}