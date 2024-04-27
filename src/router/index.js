import VueRouter from 'vue-router'
const routes=[
    {
        path:'/',
        component:()=>import('@/components/RightContainer/ArticleList.vue')
    },
    {
        path:'/article/:id',
        component:()=>import('@/components/RightContainer/ArticleDetail.vue')
    },
    {
        path:'/archive',
        component:()=>import('@/components/RightContainer/Archive.vue')
    },
    {
        path:'/tags',
        component:()=>import('@/components/RightContainer/Tags.vue')
    },
    {
        path:'/about',
        component:()=>import('@/components/RightContainer/About.vue')
    },
    {
        path:'/links',
        component:()=>import('@/components/RightContainer/Links.vue')
    }
]
export default new VueRouter({
    routes
})