<template>
    <div class="top-container row fixed-top d-md-none col-12 align-items-center pt-2 pb-2">
        <div class="col-3"><div class="btn text-center more" @click="$store.commit('toggle',true)" data-bs-toggle="collapse" data-bs-target="#left-container" style="color: #fff;" ><i class="bi bi-sliders2"></i></div></div>
        <div class="col-6 text-center">hola world</div>
    </div>
</template>
<script>
    export default{
        name:'TopContainer',
        data(){
            return {
            }
        },
        mounted(){
        }
    }
</script>
<style>
    .top-container {
        background-color: #202020;
        color:#fff;
        z-index: 1;
        .more {
            font-size: 2rem;
            height: 100%;
        }
        img{
            width:3rem;
            height: 3rem;
            border-radius: 50%;
            margin-left: 2rem;
        }
    }
</style>