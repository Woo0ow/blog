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
        // console.log(res)
        return res
       }
    },
    
    methods: {

    },
    created(){
        getArticleDetail(1).then(data=>{
            this.markdownContent=data.article
            console.log(this.markdownContent)
        })
    }
}
</script>