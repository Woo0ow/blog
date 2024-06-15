import vuerouter from 'vue-router'
const base_url='/blog'
const routes=[
    {
        path:'/',
        components:()=>import(/* webpackprefetch: true */'@/views/Articles.vue')
    },
    {
        path:'/articles/:id',
        component:()=>import('@/views/Article.vue')
    },
    {
        path:'/archive',
        component:()=>import('@/views/Archive.vue')
    },
    {
        path:'/tags',
        component:()=>import('@/views/Tags.vue')
    },
    {
        path:'/about',
        component:()=>import('@/views/About.vue')
    },
    {
        path:'/links',
        component:()=>import('@/views/Links.vue')
    },
    {
        path:'/filter/:id',
        component:()=>import('@/views/FilterArticles.vue')
    }
]
const router= new vuerouter({
	mode:'history',
    base:base_url,
    routes
})
router.beforeEach((to, from, next) => {
  router.app.$root.$emit('show-loading');
  next();
});

router.afterEach(() => {
  router.app.$root.$emit('hide-loading');
});
router.onError((err)=>{
    location.reload();
})
export default router 
