<template>
    <div>
        <article-list :params="$route.params"></article-list>
    </div>
</template>
<script>
import ArticleList from '../components/ArticleList.vue';
export default {
    name: 'FilterArticles',
    data() {
        return {
        }
    },
    components: {
        ArticleList
    },
    mounted() {
    },
    methods: {

    }
}
</script>
