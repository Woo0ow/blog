<template>
    <div class="right-container col-12 offset-0 offset-md-3 col-md-9 offset-xl-2 col-xl-10 pt-sm-4 pb-5">
        <loading @onChange="change" style="width:95%;margin:0 auto;" />
        <router-view v-show="!loading" style="width: 95%;margin:0 auto;" />
        <div v-show="!loading" class="text-center pt-3 mt-5" style="width: 95%;margin:0 auto;color:#666;border-top: 1px solid #ccc;">Powered by
            Yang Xiongjian</div>
    </div>
</template>
<script>
import Loading from '@/components/Loading.vue'
export default {
    name: 'RightContainer',
    data() {
        return {
            loading:true
        }
    },
    components: {
        Loading
    },
    methods:{
        change(visible){
            this.loading=visible
        }
    },
    mounted(){
        this.loading=false
    }
}
</script>
<style lang="scss" scoped>
.right-container {
    padding-top: 7rem;
}
</style>
