<template>
    <div>
        <data value="" v-html="htmlContent"></data>
    </div>
</template>
<script>
import { getArticleDetail } from '@/api/article.js'
export default {
    name: 'ArticleDetail',
    data() {
        return {
            markdownContent:''
        }
    },
    computed:{
       htmlContent(){
        const res=this.$marked(this.markdownContent)
        return res
       }
    },
    
    methods: {

    },
    created(){
        getArticleDetail(this.$route.params.id).then(data=>{
            this.markdownContent=data.article.content
        })
    }
}
</script>