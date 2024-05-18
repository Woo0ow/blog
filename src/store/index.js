import {Store} from 'vuex'
import article from './modules/article'
import tag from './modules/tag'
import archive from './modules/archive'
export default new Store({
    modules:{
        article,
        tag,
        archive
    }
})