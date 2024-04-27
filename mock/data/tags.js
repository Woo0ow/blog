const tags = ['js', 'react', 'vue', '网络', 'java', 'python']
const tagsLi = tags.map((item, index) => {
    return { id: index, name: item }
})
const tagsTemplate = {
        'tagsLi': tagsLi,
        'length': tagsLi.length
}
export {
    tags,
    tagsTemplate
}