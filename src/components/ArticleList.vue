<template>
    <div>
        <ul class="article mb-4 ul-none">
            <li class="pb-5" v-for="Item in li" :key="Item.id">
                <div class="title mb-5 d-flex justify-content-between flex-wrap align-items-center">
                    <router-link :to="`/articles/${Item.id}`">{{ Item.title }}</router-link>
                    <div style="color:#ccc;">
                        发布于:{{ Item.createdAt }}
                    </div>
                </div>
                <div>
                    <div class="abstract mb-4">{{ Item.abstract }}</div>
                    <div class="row li-link">
                        <router-link :to="'/filter/' + item.id" v-for="item in Item.tags" :key="item.id"
                            class="tag col-12 mb-3 col-xl-4 mb-xxl-0">「{{ item.name
                            }}」</router-link>
                        <router-link :to="`/articles/${Item.id}`" class="detail col-12 col-xl-4">阅读全文&gt;&gt;</router-link>
                    </div>
                </div>
            </li>
        </ul>
        <div class="pager  p-2 mb-5">
            <div v-show="current <= 1"></div>
            <div class="text-start" v-show="current > 1" @click="pageChange(-1)">&lt;&lt;上一页</div>
            <router-link class="text-center" to="/archive">博客归档</router-link>
            <div class="text-end" v-show="current < total" @click="pageChange(1)">下一页&gt;&gt;</div>
            <div v-show="current >= total"></div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Articles',
    data() {
        return {
            articleLi: [],
            total: '',
            current: 1,
            li: [],
            itemsPerPage: 5
        }
    },
    props: ['params'],
    watch:{
        params(newVal){
            Object.assign(this.params,newVal)
            this.getData()
        }
    },
    methods: {
        pageChange(add) {
            this.current += add;
            const startIndex = (this.current - 1) * this.itemsPerPage
            const endIndex = startIndex + this.itemsPerPage
            this.li = this.articleLi.slice(startIndex, endIndex)
        },
        getData() {
            this.$store.dispatch('getArticleLi').then(() => {
                if (this.params)
                    this.articleLi = this.$store.state.article.articles.filter(item => {
                        let res = false
                        for (let index = 0; index < item.tagId.length; index++) {
                            if (item.tagId[index] === +this.params.id)
                                res = true
                        }
                        return res
                    })
                else
                    this.articleLi = this.$store.state.article.articles;
                this.li = this.articleLi.slice(this.current - 1, this.current + 3)
                this.total = Math.ceil(this.articleLi.length / this.itemsPerPage)
            })
        }
    },
    mounted() {
        this.getData()
    },
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

.pager {
    color: #2479cc;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    div {
        cursor: pointer;
    }
}
</style>
