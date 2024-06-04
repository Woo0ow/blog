<template>
    <div>
        <data value="" v-html="htmlContent"></data>
    </div>
</template>
<script>
export default {
    name: 'Article',
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
       this.$store.dispatch('getArticle',this.$route.params.id).then(()=>{
        this.markdownContent=this.$store.state.article.article[0].content
       })
    }
}
</script>