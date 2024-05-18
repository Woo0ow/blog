import article from './modules/article'
import tag from './modules/tag'
import archive from './modules/archive'
Mock.mock('api/articles','get',article)
Mock.mock(/api\/articles\/\d+/,'post',article)
Mock.mock('api/tags','get',tag)
Mock.mock(/api\/tags\/\d+/,'post',tag)
Mock.mock('api/archive','get',archive)

