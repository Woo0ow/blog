<template>
    <div>
        <ul class="article mb-4 ul-none">
            <li class="pb-5" v-for="item in li" :key="item.id">
                <div class="title mb-5 d-flex justify-content-between flex-wrap align-items-center">
                    <router-link :to="`/article/${item.id}`">{{ item.title }}</router-link>
                    <div style="color:#ccc;">
                        发布于:{{item.createdAt}}
                    </div>
                </div>
                <div>
                    <div class="abstract mb-4">{{ item.abstract }}</div>
                    <div class="row li-link">
                        <a href="#" class="tag col-12 mb-3 col-xl-4 mb-xxl-0">「{{ item.tag }}」</a>
                        <router-link :to="`/article/${item.id}`" class="detail col-12 col-xl-8">阅读全文>></router-link>
                    </div>
                </div>
            </li>
        </ul>
        <div class="pager d-flex justify-content-between p-2 mb-5">
            <div class="prev" v-show="current>1" @click="pageChange(-1)">{{"<<上一页"}}</div>
            <router-link class="mx-auto" to="/archive">博客归档</router-link>
            <div class="next" v-show="current<total" @click="pageChange(1)">下一页>></div>
        </div>
    </div>
</template>
<script>
import { getArticleList } from '@/api/article.js'
export default {
    name: 'ArticleList',
    data() {
        return {
            articleLi: [],
            total:'',
            current:1,
            li:[],
            itemsPerPage:5
        }
    },
    mounted() {
        getArticleList().then(data => {
            this.articleLi = data.articleLi,
            this.li=this.articleLi.slice(this.current-1,this.current+3)
            this.total=Math.ceil(this.articleLi.length/this.itemsPerPage)
        })
       
    },
    methods:{
        pageChange(add){
            this.current+=add;
            const startIndex=(this.current-1)*this.itemsPerPage
            const endIndex =startIndex+this.itemsPerPage
            this.li=this.articleLi.slice(startIndex,endIndex)
            console.log(startIndex,endIndex)
        }
    }
}
</script>
<style lang="scss" scoped>
.article {
    li {
        border-bottom: 1px solid #ccc;

        .title {
            a {
                font-size: 1.5rem;
                color: #202020;

                &:hover {
                    color: #2479cc;
                }
            }
        }

        .abstract {
            font-size: 1rem;
            color: #666;
        }
        .li-link {
            a {
                color: #2479cc;
            }
        }

    }

}
.pager{
    border-bottom: 1px solid #ccc;
    color: #2479cc;
    div{
        cursor: pointer;;
    }
}
</style>