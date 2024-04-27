import { articleLiTemplate } from './data/article.js'
import { tagsTemplate } from './data/tags.js'
import { archiveTemplate } from './data/archive.js';
Mock.mock('/article/list', 'get', articleLiTemplate);
Mock.mock('/article', 'get', {

    'article': () => { return `# hola\n 
这是一段测试内容\n
## hola world\n
这是一段测试内容\n
### javascript\n
\`\`\` javascript
console.log(\'hola world\');
\`\`\` \n
### c \n
\`\`\` c
printf(\"hola world\");
\`\`\` \n`}


})

Mock.mock('/tags', 'get', tagsTemplate)

Mock.mock('/archive','get',archiveTemplate)
