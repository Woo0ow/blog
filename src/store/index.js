import {Store} from 'vuex'
import article from './modules/article'
import tag from './modules/tag'
import archive from './modules/archive'
import common from './modules/common'
export default new Store({
    modules:{
        article,
        tag,
        archive,
        common
    }
})