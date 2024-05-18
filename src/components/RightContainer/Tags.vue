<template>
    <div class="tags">
        <div class="m-title pt-4 pb-5 mb-2">标签</div>
        <div class="d-flex flex-wrap">
            <router-link :to="{path:'/',query:{param:item.name}}" class="p-3 m-2" style="border: 1px solid #ccc;border-radius: .8rem;" v-for="item in tags" :key="item.id">{{item.name}}</router-link>
        </div>
    </div>
</template>
<script>
    export default{
        name:'Tags',
        data(){
            return{
                tags:''
            }
        },
        mounted(){
           this.$store.dispatch('getTags').then(data=>{
            console.log(data)
            this.tags=data
           }) 
        }
    }
</script>
<style lang="scss" scoped>
    a{
        color: #202020;
    }
</style>
