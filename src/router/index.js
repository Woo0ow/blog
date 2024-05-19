import VueRouter from 'vue-router'
const routes=[
    {
        path:'/',
        component:()=>import('@/components/RightContainer/Articles.vue')
    },
    {
        path:'/articles/:id',
        component:()=>import('@/components/RightContainer/Article.vue')
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
    },
    {
        path:'/filter/:id',
        component:()=>import('@/components/RightContainer/FilterArticles.vue')
    }
]
export default new VueRouter({
    routes
})