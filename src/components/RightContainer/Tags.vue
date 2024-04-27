<template>
    <div class="tags">
        <div class="m-title pt-4 pb-5 mb-2">标签</div>
        <div class="d-flex flex-wrap">
            <router-link to="/" class="p-3 m-2" style="border: 1px solid #ccc;border-radius: .8rem;" v-for="item in tags" :key="item.id">{{item.name}}</router-link>
        </div>
    </div>
</template>
<script>
import {getTags} from '@/api/tags.js'
    export default{
        name:'Tags',
        data(){
            return{
                tags:''
            }
        },
        mounted(){
            getTags().then(data=> {
                console.log(data)
                this.tags=data.tagsLi
            })
        }
    }
</script>
<style lang="scss" scoped>
    a{
        color: #202020;
    }
</style>