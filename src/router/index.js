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
const router= new VueRouter({routes})
router.beforeEach((to, from, next) => {
  router.app.$root.$emit('show-loading');
  next();
});

router.afterEach(() => {
  router.app.$root.$emit('hide-loading');
});
export default router 
